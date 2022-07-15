import GlobalComponent from "../Components/GlobalComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UpdateScoreSystem extends cc.Component {
    gameplayComponent = null;
    label = null;
    animation = null;

    score = null;
    onLoad(){
        this.gameplayComponent = GlobalComponent.instance.gameplayComponent;
        this.label = this.getComponent(cc.Label);
        this.animation = this.getComponent(cc.Animation);
    }
    update(dt){
        if(this.score == this.gameplayComponent.score) return;
        this.score = this.gameplayComponent.score;
        this.label.string = this.score;
        this.animation.play();
    }
}
