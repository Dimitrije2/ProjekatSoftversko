export function Home(){
    let stil = {
        color:"#7F4824",
        fontSize:25,
        fontWeight:"bold"
    };

    
    return(
        <>
            <h1>Dobrodosli na stranicu Crossfit kluba</h1>

            <div id="sadrzaj" style = {stil}>
                <p>Ukoliko zelite da postanete bolja verzija sebe, na pravom ste mestu !</p>
                <p>Klikom na dugme dobicete spisak trenera u nasem klubu !</p>

                <div id = "treneri"></div>

                <button id = "dugme-vezbe" onClick={treneri}>  Treneri </button>
                <button id = "sakrij" onClick = {sakrij}>ukloni</button>               
            </div>

            <div className="slika-div"></div>
        </>
    )
}

function treneri(){
    document.getElementById('treneri').innerHTML = 
    "<p>Marko Dejanovic</p> <p>Petar Petrovic</p> <p>Nemanja Matic</p> <p>Dejan Dekic</p>"
    document.getElementById("dugme-vezbe").style.display = "none"
    document.getElementById('sakrij').style.display = "inline-block"
}

function sakrij(){
    document.getElementById('treneri').innerHTML = "";
    document.getElementById("dugme-vezbe").style.display = "inline-block"
    document.getElementById('sakrij').style.display = "none"
}

