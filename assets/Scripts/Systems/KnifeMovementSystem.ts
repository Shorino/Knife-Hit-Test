import KnifeComponent from "../Components/KnifeComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class KnifeMovementSystem extends cc.Component {
    knifeComponent = null
    
    onLoad(){
        this.knifeComponent = this.getComponent(KnifeComponent);
    }
    update(dt){
        this.knifeComponent.rigidBody.syncPosition(true);
        this.knifeComponent.rigidBody.syncRotation(true);
        if(this.knifeComponent.collidedWithTarget || this.knifeComponent.collidedWithKnife) return;
        this.node.y += this.knifeComponent.moveSpeed * dt;
    }
}