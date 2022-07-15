import GlobalComponent from "../Components/GlobalComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameflowSystem extends cc.Component {
    gameplayComponent = null;
    targetComponent = null;
    knifeSpawnerComponent = null;

    onLoad(){
        this.gameplayComponent = GlobalComponent.instance.gameplayComponent;
        this.targetComponent = GlobalComponent.instance.targetComponent;
        this.knifeSpawnerComponent = GlobalComponent.instance.knifeSpawnerComponent;
    }
    update(dt){
        this.restartGame();
    }
    restartGame(){
        if(this.gameplayComponent.gameLost == false) return;
        this.gameplayComponent.gameLost = false;
        this.knifeSpawnerComponent.canShoot = false;
        this.targetComponent.canMoveAndRotate = false;
        this.scheduleOnce(()=>{
            this.targetComponent.knifeLayer.removeAllChildren(true);
            this.targetComponent.canMoveAndRotate = true;
            this.targetComponent.node.angle = 0;
            this.targetComponent.node.position = cc.v3(0,300,0);
            this.knifeSpawnerComponent.canShoot = true;
            this.gameplayComponent.score = 0;
        }, this.gameplayComponent.breakTime);
    }
}
