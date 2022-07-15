import GameplayComponent from "./GameplayComponent";
import KnifeSpawnerComponent from "./KnifeSpawnerComponent";
import TargetComponent from "./TargetComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GlobalComponent extends cc.Component {
    @property(KnifeSpawnerComponent)
    knifeSpawnerComponent = null;
    @property(TargetComponent)
    targetComponent = null;
    @property(GameplayComponent)
    gameplayComponent = null;

    static instance = null;
    onLoad() {
        if (GlobalComponent.instance == null) {
            GlobalComponent.instance = this;
        } else {
            this.destroy();
        }
    }
}
