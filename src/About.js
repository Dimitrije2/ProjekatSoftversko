import FlushExample from "./Trainings";
import Gallery from "./Gallery";
export function About(){
    return(
        <div id="about">
            <h1>Par reci o klubu</h1>
            <p>Mi smo organizacija koja svoje treninge zasniva na Crossfit osnovama, odnosno bavimo se treninzima na principu kardio i street workout treninga.
                Svaki nas trening je HIIT trening odnosno trening visokog intenziteta koji ce omoguciti da postignete visoki nivo kondicije uz izdrzljivost i snagu.
                Pozivamo sve ljubitelje ovog nacina treninga da nam se pridruze kako bi svi zajedno postali sve snazniji i prevazisli svoje granice.
            </p>
            <FlushExample />
            <Gallery />
        </div>
        
    );
}