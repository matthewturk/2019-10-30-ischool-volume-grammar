function generateCellData(Nx = 6, Ny = 8,
                           rBounds = [40, 200],
                           thetaBounds = [0.0, Math.PI],
                           xBounds = [-120.0, 120.0],
                           yBounds = [-160.0, 160.0]) {
  
  var dr = (rBounds[1] - rBounds[0])/Nx;
  var dtheta = (thetaBounds[1] - thetaBounds[0])/Ny;
  var dx = (xBounds[1] - xBounds[0])/Nx;
  var dy = (yBounds[1] - yBounds[0])/Ny;
  
  var data = []
  d3.range(Nx).forEach(i => d3.range(Ny).forEach( j=> {
    data.push({
      flatIndex: i * Ny + j,
      i: i,
      j: j,
      x0: (i + 0) * dx + xBounds[0],
      x1: (i + 1) * dx + xBounds[0],
      y0: (j + 0) * dy + yBounds[0],
      y1: (j + 1) * dy + yBounds[0],
      r0: (i + 0) * dr + rBounds[0],
      r1: (i + 1) * dr + rBounds[0],
      theta0: (j + 0) * dtheta + thetaBounds[0],
      theta1: (j + 1) * dtheta + thetaBounds[0],
    });
  }));
  return data;
};

function ringermacherMead(A, B, N) {
  return function(phi) {
    return A / Math.log(B * Math.tan(phi / (2*N)));
  }
}
