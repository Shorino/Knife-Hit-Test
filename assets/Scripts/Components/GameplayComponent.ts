const {ccclass, property} = cc._decorator;

@ccclass
export default class GameplayComponent extends cc.Component {
    @property
    breakTime = 2;
    gameLost = false;
    score = 0;
}
