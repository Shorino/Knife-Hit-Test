import GlobalComponent from "../Components/GlobalComponent";
import KnifeComponent from "../Components/KnifeComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class KnifeCollisionSystem extends cc.Component {
    knifeComponent = null;
    knifeSpawnerComponent = null;
    targetComponent = null;
    gameplayComponent = null;

    onLoad() {
        this.knifeComponent = this.getComponent(KnifeComponent);
        this.knifeSpawnerComponent = GlobalComponent.instance.knifeSpawnerComponent;
        this.targetComponent = GlobalComponent.instance.targetComponent;
        this.gameplayComponent = GlobalComponent.instance.gameplayComponent;
    }
    onCollisionEnter(other, self) {
        if (other.node.name == "Target") {
            this.collisionResponseWithTarget();
        }
        if (other.node.name == "Knife") {
            this.collisionResponseWithKnife();
        }
    }
    collisionResponseWithTarget() {
        if (this.knifeComponent.collidedWithTarget) return;
        this.knifeComponent.collidedWithTarget = true;
        let globalPosition = this.knifeSpawnerComponent.knifeLayer.convertToWorldSpaceAR(this.node.position);
        let localPosition = this.targetComponent.knifeLayer.convertToNodeSpaceAR(globalPosition);
        this.node.parent = this.targetComponent.knifeLayer;
        this.node.position = localPosition;
        this.node.angle = -this.targetComponent.node.angle;
        this.gameplayComponent.score++;
    }
    collisionResponseWithKnife() {
        if(this.knifeComponent.collidedWithKnife || this.knifeComponent.collidedWithTarget) return;
        this.knifeComponent.collidedWithKnife = true;
        this.knifeComponent.rigidBody.gravityScale = this.knifeComponent.gravityForce;
        this.knifeComponent.rigidBody.angularVelocity = Math.random() < 0.5 ? this.knifeComponent.angularForce : -this.knifeComponent.angularForce;
        this.gameplayComponent.gameLost = true;
    }
}
