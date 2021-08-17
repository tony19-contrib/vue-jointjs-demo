// `wobble` connector from https://resources.jointjs.com/docs/jointjs/v3.3/joint.html#connectors.custom
function addWobbleConnector({ connectors, g }) {
  connectors.wobble = (sourcePoint, targetPoint, vertices, args) => {

    let SPREAD = args.spread || 20;

    let points = vertices.concat(targetPoint)
    let prev = sourcePoint;
    let path = new g.Path(g.Path.createSegment('M', prev));

    let n = points.length;
    for (let i = 0; i < n; i++) {

      let next = points[i];
      let distance = prev.distance(next);

      let d = SPREAD;
      while (d < distance) {
        let current = prev.clone().move(next, -d);
        current.offset(
          Math.floor(7 * Math.random()) - 3,
          Math.floor(7 * Math.random()) - 3
        );
        path.appendSegment(g.Path.createSegment('L', current));
        d += SPREAD;
      }

      path.appendSegment(g.Path.createSegment('L', next));
      prev = next;
    }

    return path;
  }
}

export default {
  install(app) {
    const joint = require('jointjs')
    addWobbleConnector(joint)

    app.prototype.$joint = joint
    app.joint = joint
  }
}