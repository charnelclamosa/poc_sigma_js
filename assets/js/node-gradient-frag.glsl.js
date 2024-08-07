// language=GLSL
const SHADER_SOURCE = /*glsl*/ `
precision mediump float;

varying vec4 v_color;
varying float v_border;

const float radius = 0.8;
const float halfRadius = 0.35;

void main(void) {
  vec4 transparent = vec4(1.0, 1.0, 1.0, 1.0);
  vec4 white = vec4(1.0, 1.0, 1.0, 1.0);
  float distToCenter = length(gl_PointCoord - vec2(0.5, 0.5));

  gl_FragColor = v_color;
}
`

export default SHADER_SOURCE
