import path from 'path'
import Express from 'express'
import httpProxy from 'http-proxy'
import compression from 'compression'
import connectHistoryApiFallback from 'connect-history-api-fallback'
import config from '../config/config'

const app = new Express();
const port = config.port;

app.use('/api',(req,res)=>{
    proxy.web(req,res,{target:targetUrl})
});

// 防止刷新浏览或者直接进入某页面出现404
app.use('/', connectHistoryApiFallback());

//创建一个代理服务,地址为本地的3030端口
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
    target:targetUrl
});

// Express 4.0以上版本, 为了缩小接口与静态文件的下载体积，在服务器资源可观的情况下我们可以开启Gzip
app.use(compression());


//热更新
if(process.env.NODE_ENV!=='production'){
    const Webpack = require('webpack');
    // webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server
    const WebpackDevMiddleware = require('webpack-dev-middleware');
    const WebpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../webpack.dev');

    const compiler = Webpack(webpackConfig);
    
    // 告诉 express 使用 webpack-dev-middleware，以及将 webpack.dev.js 配置文件作为基础配置
    app.use(WebpackDevMiddleware(compiler, {
        publicPath: '/',
        stats: {colors: true},
        lazy: false
    }));
    app.use(WebpackHotMiddleware(compiler));
}

app.listen(port,(err)=>{ // 监听8082端口
    if(err){
        console.error(err)
    }else{
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
    }
});