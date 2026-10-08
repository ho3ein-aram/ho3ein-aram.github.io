const defaultData={
  name:'Hossein',
  about:'در دنیای هک، لینوکس و تکنولوژی؛ همیشه در حال یادگیری و ساختن.',
  aboutEn:'In the world of hacking, Linux, and technology; always learning and building.',
  tags:['HACKING','PHISHING','LINUX','TERMUX','AI','CODE'],
  github:'https://github.com/ho3ein-aram',
  telegram:'https://t.me/enqelabiy',
  posts:[]
};
let data=JSON.parse(localStorage.getItem('hossein_site_data')||'null')||defaultData;
if(!data.aboutEn) data.aboutEn=defaultData.aboutEn;
const app=document.querySelector('#app');
const savedSettings=JSON.parse(localStorage.getItem('hossein_site_settings')||'null')||{};
let settingsState={
  theme:savedSettings.theme==='light'?'light':'dark',
  animations:savedSettings.animations!==false,
  notifications:savedSettings.notifications||false,
  language:savedSettings.language==='en'?'en':'fa'
};

const iconGithub=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .6a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6-.01c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .6Z"/></svg>`;
const iconTelegram=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.3 2.9 10.55c-1.28.51-1.27 1.22-.23 1.54l4.83 1.51 1.85 5.63c.23.64.12.9.79.9.52 0 .75-.24 1.04-.53l2.31-2.24 4.81 3.55c.88.49 1.52.23 1.74-.82l3.16-14.89c.32-1.28-.49-1.86-1.5-1.3ZM8.25 13.26l10.98-6.93c.55-.33 1.05-.15.64.21l-8.93 8.06-.35 3.75-2.34 3.75-2.34-5.09-2.34-5.09Z"/></svg>`;

const T={
fa:{
 profile:'پروفایل',posts:'پست‌ها',cyberpath:'مبانی',ai:'هوش مصنوعی',menu:'منو',menuSub:'تنظیمات',
  menuNotifications:'اعلان‌ها',menuNotificationsSub:'اعلان‌های مرورگر',
 menuLanguage:'زبان',menuLanguageSub:'زبان رابط کاربری',
 menuMatrix:'ترمینال ماتریکس',menuMatrixSub:'ترمینال عددی',
 menuDownloads:'دانلود اپ',menuDownloadsSub:'ابزارها و برنامه‌ها',
 menuScanner:'ایپی اسکنر',menuScannerSub:'HossienScanner',
 menuFishing:'مانیتور فیشینگ',menuFishingSub:'Fishing Monitor',
 menuScanner2:'ایپی اسکنر 2',menuScanner2Sub:'اسکنر اطلاعات IP',
 menuShellGenerator:'ساخت شل',menuShellGeneratorSub:'Shell Generator',
 menuGithubUploader:'گیتهاب آپلودر',menuGithubUploaderSub:'GitHub Folder Uploader',
 menuVersionLabel:'نسخه سایت',
 aboutTitle:'درباره',projects:'پروژه‌ها',work:'در حال ساخت',workSub:'یک چیزی در حال ساخته شدن است...',
 connect:'ارتباط',developer:'توسعه‌دهنده',identity:'LINUX / TERMUX / AI / CODE',
 postsTitle:'پست‌ها',postsSub:'مطالب، کدها و چیزهایی که در حال ساختنشان هستی.',
 emptyTitle:'هنوز پستی منتشر نشده',emptySub:'اولین چیزی که می‌سازی را اینجا منتشر کن.',delete:'حذف',
 aiSub:'برای کدنویسی، Termux و توضیح خطاها.',aiPlaceholder:'پیامت را بنویس...',
 aiWelcome:'سلام Hossein 👋\nاین بخش آماده است. برای اتصال به یک مدل واقعی، API را در بک‌اند سایت تنظیم می‌کنیم.',
 aiReceived:'پیامت دریافت شد. اتصال به API هوش مصنوعی در نسخه بعدی انجام می‌شود.',
 saved:'ذخیره شد',languageChanged:'زبان تغییر کرد',animationsOn:'انیمیشن‌ها فعال شد',animationsOff:'انیمیشن‌ها غیرفعال شد',
 notificationsOn:'اعلان‌ها فعال شد',notificationsOff:'اعلان‌ها غیرفعال شد',notificationDenied:'اجازه اعلان توسط مرورگر داده نشد',
 notificationsUnsupported:'مرورگر شما اعلان را پشتیبانی نمی‌کند',postDeleted:'پست حذف شد'
},
en:{
 profile:'Profile',posts:'Posts',cyberpath:'Foundations',ai:'AI',menu:'Menu',menuSub:'Settings',
  menuNotifications:'Notifications',menuNotificationsSub:'Browser notifications',
 menuLanguage:'Language',menuLanguageSub:'Interface language',
 menuMatrix:'Matrix Terminal',menuMatrixSub:'Numeric terminal',
 menuDownloads:'App Downloads',menuDownloadsSub:'Tools and apps',
 menuScanner:'IP Scanner',menuScannerSub:'HossienScanner',
 menuFishing:'Fishing Monitor',menuFishingSub:'Fishing Monitor',
 menuScanner2:'IP Scanner 2',menuScanner2Sub:'IP intelligence scanner',
 menuShellGenerator:'Shell Generator',menuShellGeneratorSub:'Multi-language shell generator',
 menuGithubUploader:'GitHub Uploader',menuGithubUploaderSub:'GitHub Folder Uploader',
 menuVersionLabel:'Site version',
 aboutTitle:'ABOUT',projects:'PROJECTS',work:'WORK IN PROGRESS',workSub:'something is being built...',
 connect:'CONNECT',developer:'DEVELOPER',identity:'LINUX / TERMUX / AI / CODE',
 postsTitle:'Posts',postsSub:'Things, code, and ideas you are building.',
 emptyTitle:'No posts yet',emptySub:'Your published posts will appear here.',delete:'Delete',
 aiSub:'For coding, Termux, and debugging.',aiPlaceholder:'Write your message...',
 aiWelcome:'Hi Hossein 👋\nThis section is ready. Connect a real AI model by configuring an API on the backend.',
 aiReceived:'Your message was received. The AI API connection will be added in a later version.',
 saved:'Saved',languageChanged:'Language changed',animationsOn:'Animations enabled',animationsOff:'Animations disabled',
 notificationsOn:'Notifications enabled',notificationsOff:'Notifications disabled',notificationDenied:'Notification permission was denied',
 notificationsUnsupported:'Your browser does not support notifications',postDeleted:'Post deleted'
}};

function t(k){return (T[settingsState.language]||T.fa)[k]||k}
function save(){localStorage.setItem('hossein_site_data',JSON.stringify(data))}
function saveSettings(){localStorage.setItem('hossein_site_settings',JSON.stringify(settingsState))}
function applySettings(){
  const root=document.documentElement;
  root.dataset.theme=settingsState.theme;
  root.dataset.lang=settingsState.language;
  root.dir=settingsState.language==='fa'?'rtl':'ltr';
  root.lang=settingsState.language;
  document.body.classList.toggle('no-animations',!settingsState.animations);
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.content=settingsState.theme==='dark'?'#08090b':'#f4f5f7';
  const icon=document.getElementById('themeIcon');
  if(icon)icon.textContent=settingsState.theme==='dark'?'☾':'☀';
}
function profile(){
  const about=settingsState.language==='en'?(data.aboutEn||defaultData.aboutEn):(data.about||defaultData.about);
  return `<section class="page">
    <header class="profile-head">
      <div class="avatar"><img src="profile.jpg" alt="Hossein profile"></div>
      <div class="name">${esc(data.name)}</div><div class="role">${t('developer')}</div><div class="identity">${t('identity')}</div>
    </header>
    <section class="section"><div class="section-title">${t('aboutTitle')}</div><div class="about">${esc(about)}</div><div class="tags">${data.tags.map(x=>`<span class="tag">${esc(x)}</span>`).join('')}</div></section>
    <section class="section"><div class="section-title">${t('projects')}</div><div class="work"><strong>${t('work')}</strong><span>${t('workSub')}</span></div></section>
    <section class="section"><div class="section-title">${t('connect')}</div><div class="connect">
      <a class="social" href="${data.github}" target="_blank" rel="noopener"><div class="social-circle">${iconGithub}</div><span>GitHub</span></a>
      <a class="social" href="${data.telegram}" target="_blank" rel="noopener"><div class="social-circle">${iconTelegram}</div><span>Telegram</span></a>
    </div></section>
  </section>`
}
function posts(){
  const list=data.posts||[];
  return `<section class="page"><div class="card"><div class="posts-head"><div><h1 class="page-title">${t('postsTitle')}</h1><div class="page-sub">${t('postsSub')}</div></div></div>
  ${list.length?list.map((p,i)=>`<article class="post"><h3>${esc(p.title)}</h3><time>${esc(p.date)}</time><p>${esc(p.text)}</p>${p.code?`<pre class="code">${esc(p.code)}</pre>`:''}<button class="btn" onclick="deletePost(${i})">${t('delete')}</button></article>`).join(''):`<div class="empty"><strong>${t('emptyTitle')}</strong>${t('emptySub')}</div>`}
  </div></section>`
}
function ai(){
  return `<section class="page"><div class="card chat"><div><h1 class="page-title">${t('ai')}</h1><div class="page-sub">${t('aiSub')}</div></div><div class="messages" id="messages"><div class="msg bot">${t('aiWelcome')}</div></div><form class="chat-form" onsubmit="sendAI(event)"><input id="aiInput" placeholder="${t('aiPlaceholder')}" autocomplete="off"><button aria-label="send">↑</button></form></div></section>`
}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function updateMenu(){
  const set=(id,key)=>{const el=document.getElementById(id);if(el)el.textContent=t(key)};
  set('menuTitle','menu');set('menuSub','menuSub');
  
  set('menuNotifications','menuNotifications');set('menuNotificationsSub','menuNotificationsSub');
  set('menuLanguage','menuLanguage');set('menuLanguageSub','menuLanguageSub');
  set('menuMatrix','menuMatrix');set('menuMatrixSub','menuMatrixSub');
  set('menuDownloads','menuDownloads');set('menuDownloadsSub','menuDownloadsSub');
  set('menuScanner','menuScanner');set('menuScannerSub','menuScannerSub');
  set('menuFishing','menuFishing');set('menuFishingSub','menuFishingSub');
  set('menuScanner2','menuScanner2');set('menuScanner2Sub','menuScanner2Sub');
  set('menuShellGenerator','menuShellGenerator');set('menuShellGeneratorSub','menuShellGeneratorSub');
  set('menuGithubUploader','menuGithubUploader');set('menuGithubUploaderSub','menuGithubUploaderSub');
  set('menuVersionLabel','menuVersionLabel');
  
  const n=document.getElementById('menuNotificationsSwitch');if(n)n.classList.toggle('on',settingsState.notifications);
  document.getElementById('menuPersian')?.classList.toggle('selected',settingsState.language==='fa');
  document.getElementById('menuEnglish')?.classList.toggle('selected',settingsState.language==='en');
}
function openMenu(){document.body.classList.add('menu-open');document.getElementById('sideMenu')?.setAttribute('aria-hidden','false');updateMenu()}
function closeMenu(){document.body.classList.remove('menu-open');document.getElementById('sideMenu')?.setAttribute('aria-hidden','true')}
function toggleHeaderTheme(){
  settingsState.theme=settingsState.theme==='dark'?'light':'dark';
  saveSettings();applySettings();updateMenu();
}
function toggleAnimationsFromMenu(){settingsState.animations=!settingsState.animations;saveSettings();applySettings();updateMenu();toast(settingsState.animations?t('animationsOn'):t('animationsOff'))}
async function toggleNotificationsFromMenu(){await toggleNotifications();updateMenu()}
function setLanguageFromMenu(lang){
  settingsState.language=lang;saveSettings();applySettings();render(location.hash.slice(1)||'profile');updateMenu();toast(t('languageChanged'))
}
function render(page=location.hash.slice(1)||'profile'){
  applySettings();
  document.querySelectorAll('.nav-item').forEach(x=>{x.classList.toggle('active',x.dataset.page===page);const label=x.querySelector('.nav-label');if(label)label.textContent=t(x.dataset.page)});
  const menuLabel=document.querySelector('.menu-label');if(menuLabel)menuLabel.textContent=t('menu');
  app.innerHTML=page==='posts'?posts():page==='ai'?ai():profile();
  updateMenu();
  window.scrollTo({top:0,behavior:settingsState.animations?'smooth':'auto'});
}
async function toggleNotifications(){
  if(!('Notification' in window)){toast(t('notificationsUnsupported'));return}
  if(settingsState.notifications){settingsState.notifications=false;saveSettings();updateMenu();toast(t('notificationsOff'));return}
  const permission=Notification.permission==='granted'?'granted':await Notification.requestPermission();
  if(permission==='granted'){settingsState.notifications=true;saveSettings();updateMenu();toast(t('notificationsOn'));try{new Notification(settingsState.language==='fa'?'اعلان‌ها فعال شد':'Notifications enabled')}catch(e){}}
  else toast(t('notificationDenied'))
}
function deletePost(i){if(confirm(settingsState.language==='fa'?'این پست حذف شود؟':'Delete this post?')){data.posts.splice(i,1);save();render('posts');toast(t('postDeleted'))}}
function sendAI(e){e.preventDefault();const input=document.querySelector('#aiInput');const text=input.value.trim();if(!text)return;const box=document.querySelector('#messages');box.insertAdjacentHTML('beforeend',`<div class="msg user">${esc(text)}</div>`);input.value='';setTimeout(()=>box.insertAdjacentHTML('beforeend',`<div class="msg bot">${t('aiReceived')}</div>`),300);box.scrollTop=box.scrollHeight}
let tt;function toast(message){clearTimeout(tt);const x=document.querySelector('#toast');x.textContent=message;x.classList.add('show');tt=setTimeout(()=>x.classList.remove('show'),1800)}

document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.page==='cyberpath'){location.href='foundations.html';return}location.hash=b.dataset.page;render(b.dataset.page)}));
window.addEventListener('hashchange',()=>render());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
applySettings();render();
