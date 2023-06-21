var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://postimg.cc/rRygfbL2", "https://postimg.cc/878yzzhc" , "https://postimg.cc/BPXhX8YL", "https://postimg.cc/sBT97jZp", "https://postimg.cc/NK1d9v44"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
