var myimgobj = document.images["jsbutton"];

function changeImage()
{
document.images["jsbutton"].src= "buyit15u.jpg";
return true;
}
function changeImageBack()
{
document.images["jsbutton"].src = "buyit15.jpg";
return true;
}
function handleMDown()
{
document.images["jsbutton"].src = "buyit15d.jpg";
return true;
}
function handleMUp()
{
changeImage();
return true;
}
</script>
