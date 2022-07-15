const {ccclass, property} = cc._decorator;

@ccclass
export default class TargetComponent extends cc.Component {
    @property(cc.Node)
    knifeLayer = null;
    @property
    rotateTransitionSpeed = 200;
    @property
    maxRotateSpeed = 200;
    @property
    moveTransitionSpeed = 200;
    @property
    maxMoveSpeed = 200;
    @property
    maxPositionX = 120;
    
    canMoveAndRotate = true;
    rotateSpeed = 0;
    targetRotateSpeed = 0;
    moveSpeed = 0;
    targetMoveSpeed = 0;
}
