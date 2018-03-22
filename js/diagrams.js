function change1() {
    
    var modal= document.getElementById('myModal');
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Temple Of The Tooth,Sri Lanka</u>";
    document.getElementById("mainImg").src="../Images/Diagrams/fmaligawa.jpg";
    document.getElementById("des").innerHTML="The golden-roofed Temple of the Sacred Tooth houses Sri Lanka’s most <br>important Buddhist relic – a tooth of the Buddha. During puja <br>(offerings or prayers), the heavily guarded room housing the tooth is open to<br> devotees and tourists. However, you don’t actually see the tooth. It’s kept in a gold <br>casket shaped like a dagoba (stupa), which contains a series of six dagoba caskets<br> of diminishing size.As well as the revered main temple, the complex includes a <br>series of smaller temples, shrines and museums.";
}

function change2() {        
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Blue Lagoon,IceLand</u>";
    document.getElementById("mainImg").src="../Images/Diagrams/ficelandbl.jpg";
    document.getElementById("des").innerHTML="The Blue Lagoon was formed in 1976 during operation at the nearby geothermal<br> power plant. In the years that followed, people began to bathe in the unique water<br> and apply the silica mud to their skin. Those with psoriasis noticed an incredible<br> improvement in their condition. Over the years, Blue Lagoon has been innovative<br> in harnessing this gift of nature to develop different spa services and products. <br>Today, Blue Lagoon is recognized as one of the wonders of the world.";
}
function change3() {        
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>St.Peter's Square,Italy</u>";
    document.getElementById("mainImg").src="../Images/Diagrams/fitalysps.jpg";
    document.getElementById("des").innerHTML="Vatican City’s gigantic square, the St. Peter’s Square was built by Gian Lorenzo<br> Bernini between 1656 and 1667 and is located on the St. Peter’s Basilica.<br> This is the square where the giant St. Peter and Egyptian Obelisk can be found.<br>The St. Peter’s Square and St. Peter’s Basilica was a portion of the former Circus <br>of Nero stadium. The former stadium stands about 560 meters and has a width of <br>80 meters.One of the magnificent features that produced the equilibrium of the<br> St. Peter’s Square is the obelisk and twin fountains. In 1586, Pope Sixtus V gave <br>order to move the Egyptian Obelisk to the right side of the St. Peter’s Square, <br>above the pontifical colonnade called Apostolic Palace. On both sides of the marble <br>stone obelisk are the two identical fountains. The first one was designed <br>by Maderno in 1612 and the twin fountain was installed by Bernini in 1675.";
    
}
function change4() { 
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Machu Pichu,Peru</u>";
    document.getElementById("mainImg").src="../Images/Diagrams/fperump.jpg";
    document.getElementById("des").innerHTML="Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical<br> mountain forest,in an extraordinarily beautiful setting. It was probably the<br> most amazing urban creation of the Inca Empire at its height; its giant walls,<br> terraces and ramps seem as if they have been cut naturally in the <br>continuous rock escarpments. The natural setting, on the eastern slopes of the Andes,<br> encompasses the upper Amazon basin with its rich diversity of flora and fauna.";
    
}
function change5() {
    var modal= document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("header").innerHTML="<u>Stock Holms,Sweden</u>";
    document.getElementById("mainImg").src="../Images/Diagrams/fswedensh.jpg";
    document.getElementById("des").innerHTML="Stockholm is a city of great contrasts, where trends within music, design, fashion,<br> and world re-known technology is born. This is also a capital with a rich history,<br> with exciting architecture, museums, castles and an old town that dates from the<br> 13th century.";
}
window.onclick = function change(event){
    var modal= document.getElementById('myModal'); 
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function backblue(){
   back.style.backgroundColor = "#6495ED";
}

function backmoccasin(){
    back.style.backgroundColor = "#FFE4B5";
}

function backgray(){
    back.style.backgroundColor = "#A9A9A9";
}

function textmaroon(){
    document.getElementById("des").style.color="#800000";
}

function textgreen(){
    document.getElementById("des").style.color="#006400";
}

function textnavy(){
    document.getElementById("des").style.color="#000080";
}
