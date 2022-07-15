const {ccclass, property} = cc._decorator;

@ccclass
export default class KnifeComponent extends cc.Component {
    @property(cc.RigidBody)
    rigidBody = null;
    @property
    moveSpeed = 100;
    @property
    gravityForce = 200;
    @property
    angularForce = 3000;
    @property
    collidedWithTarget = false;
    collidedWithKnife = false;
}
