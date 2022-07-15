export function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}
export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getDecimalOnly(value){
    return value - Math.trunc(value);
}
export function roundTwoDecimal(number){
    return Math.round(number * 100) / 100;
}
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function concatUnique(a, b){
    return a.concat(b.filter(item => a.indexOf(item) < 0));
}
export function delayOneFrame(func){
    cc.director.once(cc.Director.EVENT_AFTER_UPDATE, func);
}
export function convertToCanvasPosition(node, canvas){
    return canvas.node.convertToNodeSpaceAR(node.parent.convertToWorldSpaceAR(node.position));
}
export function toDegree(radian){
    return radian * 180 / Math.PI;
}
export function toRadian(degree){
    return degree * Math.PI / 180;
}
//#region Bezier
export function bezierCurve(p, t){
    let answer = cc.v2(0,0);
    for (let i = 0; i < p.length; i++)
    {
        let x = p[i].x * bernsteinPolynomial(i, p.length - 1, t);
        let y = p[i].y * bernsteinPolynomial(i, p.length - 1, t);
        answer = cc.v2(answer.x + x, answer.y + y);
    }
    return answer;
}
export function exclamation(value)
{
    let answer = 1;
    while(value > 0)
    {
        answer *= value--;
    }
    return answer;
}
export function combination(n, i)
{
    return exclamation(n) / (exclamation(i) * exclamation(n - i));
}
function bernsteinPolynomial(i, n, t)
{
    return combination(n, i) * Math.pow(t , i) * Math.pow(1 - t, n - i);
}
//#endregion