import {Component} from "angular2/core";
import {Video} from "./video";
@Component({
    selector:'playlist',
    templateUrl:'app/ts/playlist.component.html',
    inputs:['videos']
})
export class PlaylistComponent{
    onSelect(vid:Video){
        // this will print information to the console of  your browser
        console.log(JSON.stringify(vid));
    }
}