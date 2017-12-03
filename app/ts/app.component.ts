import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from "./video";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
    this.videos = [
        new Video(1, "Matt Redman - Never Once (Live)","722zPX1npcA", "Worship Music"),
        new Video(2, "Kari Jobe - Forever (Live)","huFra1mnIVE", "Worship Music"),
        new Video(3, "Citipointe Live - Into The Deep - Into The Deep (Live) - Official","V8vym4gtcEM", "Worship Music")
    ]
}

}
