function openDetail(id){
document.querySelectorAll('.detail')
.forEach(d=>d.style.display='none');
document.getElementById(id).style.display='block';
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}