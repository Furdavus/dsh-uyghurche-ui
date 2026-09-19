/**
 * Host half of dsh-uyghurche-ui — intentionally a no-op.
 *
 * The language pack registers everything on the client side through the
 * locale service; the host row exists only so the bundle graph picks up
 * the package's client module (see dsh.client in package.json).
 */
const name = 'dsh-uyghurche-ui'
const inject = []
function apply() {}
export { apply, inject, name }
