(function(){
  var root=document.documentElement, btn=document.getElementById('lang');
  var opts=document.querySelectorAll('#enquiry option');
  opts.forEach(function(o){ o.setAttribute('data-en',o.textContent); });
  function set(l){
    root.lang=l; root.dir=(l==='ar')?'rtl':'ltr';
    btn.textContent=(l==='ar')?'English':'عربي';
    document.title=(l==='ar')?'أمير صلاح، مطوّر بيانات وبايثون مستقل':'Amir Salah, Freelance Data and Python Developer';
    opts.forEach(function(o){ o.textContent=o.getAttribute(l==='ar'?'data-ar':'data-en'); });
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  var saved=null; try{saved=localStorage.getItem('lang')}catch(e){}
  if(saved==='ar') set('ar');
  btn.addEventListener('click',function(){ set(root.lang==='ar'?'en':'ar'); });

  document.getElementById('enquiry').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target, name=f.name.value.trim(), co=f.company.value.trim(), type=f.type.value, msg=f.msg.value.trim();
    var subject='Project enquiry: '+type+(co?' ('+co+')':'');
    var body='Name: '+name+'\nBusiness: '+(co||'-')+'\nNeed: '+type+'\n\n'+msg;
    location.href='mailto:amir.salah.cs@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
})();
