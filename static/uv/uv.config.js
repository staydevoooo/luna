self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://luna-proxy.herokuapp.com/uv/uv.handler.js',
    bundle: 'https://luna-proxy.herokuapp.com/uv/uv.bundle.js',
    config: 'https://luna-proxy.herokuapp.com/uv/uv.config.js',
    sw: 'https://luna-proxy.herokuapp.com/uv/uv.sw.js',
};