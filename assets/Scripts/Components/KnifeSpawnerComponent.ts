const {ccclass, property} = cc._decorator;

@ccclass
export default class KnifeSpawnerComponent extends cc.Component {
    @property(cc.Prefab)
    knifePrefab = null;
    @property(cc.Animation)
    animation = null;
    @property(cc.Node)
    knifeLayer = null;

    canShoot = true;
}
