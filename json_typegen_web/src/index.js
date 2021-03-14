import {$} from "./util";
import {updateDownloadLink} from "./download";
import {restoreParams, storeParams} from "./localstorage";
import {WorkerMessage} from "./WorkerMessage";

restoreParams();

const worker = new Worker(new URL('./worker.js', import.meta.url));
let workerReady = false;
let queued;

const render = () => {
  const typename = $('typename').value;
  let input = $('input').value;
  const options = ({
    output_mode: $('outputmode').value,
    property_name_format: $('propertynameformat').value,
    unwrap: $('unwrap').value,
  });

  const extraoptions_elem = $('extraoptions');
  const extraoptions_json = extraoptions_elem.value;
  let extraoptions;
  try {
    extraoptions = extraoptions_json && JSON.parse(extraoptions_json);
    extraoptions_elem.classList.remove('is-danger')
  } catch (e) {
    extraoptions_elem.classList.add('is-danger')
  }

  storeParams({
    typename,
    input: (input.length < 1000000) ? input : "",
    options,
    extraoptions: extraoptions ? extraoptions_json : undefined
  })

  const combinedOptions = Object.assign({}, options, extraoptions || {});

  const message = {
    type: WorkerMessage.CODEGEN,
    typename,
    input: input || "{}",
    options: combinedOptions,
  };
  requestCodegen(message);
};

function requestCodegen(message) {
  if (workerReady) {
    worker.postMessage(message);
    workerReady = false;
    $('target-wrapper').classList.add('is-loading');
  } else {
    queued = message;
  }
}

worker.onmessage = messageEvent => {
  const message = messageEvent.data;
  if (message.type === WorkerMessage.CODEGEN_COMPLETE) {
    $('target-wrapper').classList.remove("is-loading");
    const target = $('target');
    target.value = message.result.trim();
    target.style.height = "10px";
    target.style.height = (target.scrollHeight + 5) + "px";

    updateDownloadLink(message.result, message.typename, message.options);
  } else if (message.type === WorkerMessage.LOAD_FILE_COMPLETE) {
    $('large-file-spinner').classList.add('is-invisible');
    $('clear-input-button').classList.remove('is-invisible');
  } else if (message.type === WorkerMessage.WASM_READY) {
    // no action needed
  } else {
    console.warn("Unknown worker message ", messageEvent);
  }

  workerReady = true;
  if (queued) {
    requestCodegen(queued);
    queued = undefined;
  }
}

$('typename').onkeyup = render;
$('input').onkeyup = render;
$('outputmode').onchange = render;
$('propertynameformat').onchange = render;
$('unwrap').onkeyup = render;
$('extraoptions').onkeyup = render;

$('loadfile').onchange = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 1000000) {
      $('input').value = "";
      $('large-file-overlay').classList.remove('is-invisible');
      $('large-file-spinner').classList.remove('is-invisible');
      $('clear-input-button').classList.add('is-invisible');
      const fileSizeMb = (file.size / 1000000).toFixed(2);
      $('large-file-message').textContent = `"${file.name}" (${fileSizeMb} MB)`;
      worker.postMessage({
        type: WorkerMessage.LOAD_FILE,
        file
      });
      workerReady = false;
      render();
    } else {
      const reader = new FileReader();
      reader.onload = (fileEvent) => {
        $('input').value = fileEvent.target.result;
        render();
      }
      reader.readAsText(file);
    }
  }
}

$('clear-input-button').onclick = () => {
  worker.postMessage({
    type: WorkerMessage.CLEAR_FILE
  });
  $('large-file-overlay').classList.add('is-invisible');
  $('input').value = "";
  render();
}

render();
