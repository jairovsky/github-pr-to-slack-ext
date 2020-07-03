import ext from "./utils/ext";

let  template =`
<div class="flash flash-info width-full mb-3 p-2 d-flex flex-items-start flex-column">
  <div>
      You can send a pretty message with the pull request info to your colleagues on Slack:
  </div>
  <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect="" value="XXX" readonly="">
  <div class="input-group-button">
    <clipboard-copy value="XXX" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></clipboard-copy>
  </div>
</div>
</div>
`;

let create = html => {
  let div = document.createElement('div');
  div.innerHTML = html.trim();
  return div;
}
let collectInfo = () => {


  let link = document.location.href;
  let title = document.querySelector('.js-issue-title').textContent.trim();
  let diffplus = document.querySelector('#diffstat .text-green').textContent.trim();
  let diffminus = document.querySelector('#diffstat .text-red').textContent.trim();

  let r = `\`${diffplus}\` \`${diffminus}\` _${title}_ ${link}`
  return r
}

let prInfoContainer = document.querySelector('.js-check-all-container');
prInfoContainer.insertBefore(create(template.replace(/XXX/g, collectInfo())), prInfoContainer.firstChild)