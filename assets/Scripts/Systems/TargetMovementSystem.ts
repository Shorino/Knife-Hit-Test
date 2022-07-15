import GlobalComponent from "../Components/GlobalComponent";
import { getRandomFloat } from "../UtilityFunctions";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TargetMovementSystem extends cc.Component {
    targetComponent = null;

    timer = 0;
    interval = 0;

    onLoad(){
        this.targetComponent = GlobalComponent.instance.targetComponent;
    }
    update(dt){
        if(!this.targetComponent.canMoveAndRotate) return;
        this.updateMoveBehaviour(dt);
        this.updateMoveSpeed(dt);
        this.moveTheTarget(dt);
    }
    updateMoveBehaviour(dt){
        if(this.timer >= this.interval){
            this.timer = 0;
            this.interval = getRandomFloat(1,3);
            this.targetComponent.targetMoveSpeed = getRandomFloat(-this.targetComponent.maxMoveSpeed, this.targetComponent.maxMoveSpeed);
        }
        else{
            this.timer += dt;
        }
    }
    updateMoveSpeed(dt){
        if (this.targetComponent.moveSpeed != this.targetComponent.targetMoveSpeed)
        {
            if (this.targetComponent.moveSpeed > this.targetComponent.targetMoveSpeed)
            {
                this.targetComponent.moveSpeed -= dt * this.targetComponent.moveTransitionSpeed;
                if(this.targetComponent.moveSpeed < this.targetComponent.targetMoveSpeed)
                {
                    this.targetComponent.moveSpeed = this.targetComponent.targetMoveSpeed;
                }
            }
            else
            {
                this.targetComponent.moveSpeed += dt * this.targetComponent.moveTransitionSpeed;
                if (this.targetComponent.moveSpeed > this.targetComponent.targetMoveSpeed)
                {
                    this.targetComponent.moveSpeed = this.targetComponent.targetMoveSpeed;
                }
            }
        }
    }
    moveTheTarget(dt){
        this.node.x += this.targetComponent.moveSpeed * dt;
        if(this.node.x > this.targetComponent.maxPositionX){
            this.node.x = this.targetComponent.maxPositionX;
            this.targetComponent.targetMoveSpeed = getRandomFloat(-this.targetComponent.maxMoveSpeed, 0);
        }
        else if(this.node.x < -this.targetComponent.maxPositionX){
            this.node.x = -this.targetComponent.maxPositionX;
            this.targetComponent.targetMoveSpeed = getRandomFloat(0, this.targetComponent.maxMoveSpeed);
        }
    }
}
