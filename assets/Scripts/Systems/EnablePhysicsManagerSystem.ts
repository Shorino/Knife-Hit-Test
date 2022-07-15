const {ccclass, property} = cc._decorator;

@ccclass
export default class EnablePhysicsManagerSystem extends cc.Component {
    onLoad(){
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
    }
}
