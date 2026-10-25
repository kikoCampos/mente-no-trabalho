document.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('navopen')})});
(function(){var here=location.pathname.replace(/index\.html$/,'');document.querySelectorAll('.links a:not(.btn)').forEach(function(a){if(a.host!==location.host)return;var t=a.pathname.replace(/index\.html$/,'');if(t===here||(t.length>1&&here.indexOf(t.replace(/\.html$/,''))===0&&/\/$/.test(t)))a.setAttribute('aria-current','page');});})();
/* barra fixa de contato no celular: aparece depois que o CTA do topo sai da tela e some quando o formulário de contato está visível */
(function(){
  if(!document.body.hasAttribute('data-mbar'))return;
  var sel=document.body.getAttribute('data-mbar');var hero=document.querySelector(sel||'header .btn-p, .hero .btn-p, .phero .btn-p');if(!hero)return;
  var en=document.documentElement.lang.indexOf('en')===0;
  var bar=document.createElement('div');bar.className='mbar';bar.setAttribute('role','region');bar.setAttribute('aria-label',en?'Contact':'Contato');
  var a=document.createElement('a');a.className='btn btn-p';a.href=hero.getAttribute('href');a.textContent=hero.textContent.replace(/\s*[↗→]\s*$/,'');
  if(hero.target)a.target=hero.target;
  var w=document.createElement('a');w.className='wa';w.href=document.body.getAttribute('data-wa')||('https://wa.me/5511983692989?text='+encodeURIComponent(en?'Hi Kiko, I came from your website.':'Oi Kiko, vim pelo site.'));w.target='_blank';w.rel='noopener';w.textContent='WhatsApp';
  bar.appendChild(a);if(a.href.indexOf('wa.me')<0)bar.appendChild(w);document.body.appendChild(bar);document.body.classList.add('has-mbar');
  var heroOut=false,formIn=false;function upd(){bar.classList.toggle('on',heroOut&&!formIn)}
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(e){heroOut=!e[0].isIntersecting;upd()}).observe(hero);
    var c=document.getElementById('contato')||document.getElementById('contact');if(c)new IntersectionObserver(function(e){formIn=e[0].isIntersecting;upd()},{threshold:.15}).observe(c);
  }
})();
/* listas que abrem e fecham no celular: título visível, texto ao tocar */
(function(){
  if(!window.matchMedia('(max-width:900px)').matches)return;
  document.querySelectorAll('.rows[data-acc]>.r').forEach(function(r){
    var h=r.querySelector('h3');if(!h)return;r.classList.add('acc');
    h.setAttribute('role','button');h.setAttribute('tabindex','0');h.setAttribute('aria-expanded','false');
    function t(){var o=r.classList.toggle('open');h.setAttribute('aria-expanded',o)}
    h.addEventListener('click',t);h.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}});
  });
})();
