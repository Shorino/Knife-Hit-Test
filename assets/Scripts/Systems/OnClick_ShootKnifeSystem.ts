import GlobalComponent from "../Components/GlobalComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class OnClick_ShootKnifeSystem extends cc.Component {
    knifeSpawnerComponent = null;

    onLoad(){
        this.knifeSpawnerComponent = GlobalComponent.instance.knifeSpawnerComponent;
        this.node.on('click', this.shootKnife, this);
    }
    onDestroy(){
        this.node.off('click', this.shootKnife, this);
    }
    shootKnife(){
        if(!this.knifeSpawnerComponent.canShoot) return;
        let knife = cc.instantiate(this.knifeSpawnerComponent.knifePrefab);
        knife.parent = this.knifeSpawnerComponent.knifeLayer;
        this.knifeSpawnerComponent.animation.play();
    }
}
