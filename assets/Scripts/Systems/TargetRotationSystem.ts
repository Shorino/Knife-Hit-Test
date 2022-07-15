import GlobalComponent from "../Components/GlobalComponent";
import { getRandomFloat } from "../UtilityFunctions";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TargetRotationSystem extends cc.Component {
    targetComponent = null;

    timer = 0;
    interval = 0;

    onLoad(){
        this.targetComponent = GlobalComponent.instance.targetComponent;
    }
    update(dt){
        if(!this.targetComponent.canMoveAndRotate) return;
        this.updateRotateBehaviour(dt);
        this.updateRotateSpeed(dt);
        this.rotateTheTarget(dt);
    }
    updateRotateBehaviour(dt){
        if(this.timer >= this.interval){
            this.timer = 0;
            this.interval = getRandomFloat(1,2);
            this.targetComponent.targetRotateSpeed = getRandomFloat(-this.targetComponent.maxRotateSpeed, this.targetComponent.maxRotateSpeed);
        }
        else{
            this.timer += dt;
        }
    }
    updateRotateSpeed(dt){
        if (this.targetComponent.rotateSpeed != this.targetComponent.targetRotateSpeed)
        {
            if (this.targetComponent.rotateSpeed > this.targetComponent.targetRotateSpeed)
            {
                this.targetComponent.rotateSpeed -= dt * this.targetComponent.rotateTransitionSpeed;
                if(this.targetComponent.rotateSpeed < this.targetComponent.targetRotateSpeed)
                {
                    this.targetComponent.rotateSpeed = this.targetComponent.targetRotateSpeed;
                }
            }
            else
            {
                this.targetComponent.rotateSpeed += dt * this.targetComponent.rotateTransitionSpeed;
                if (this.targetComponent.rotateSpeed > this.targetComponent.targetRotateSpeed)
                {
                    this.targetComponent.rotateSpeed = this.targetComponent.targetRotateSpeed;
                }
            }
        }
    }
    rotateTheTarget(dt){
        this.node.angle += this.targetComponent.rotateSpeed * dt;
    }
}
