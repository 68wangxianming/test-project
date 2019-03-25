const superagent = require('supertest');
const app = require('./app');

function request() {
    return superagent(app.listen())
}

describe('node接口测试！', function () {
    it('test接口测试', function (done) {
        // fetch('127.0.0.1/a.php',function() {

        // })
        request()
            .get('/test')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    done(err)
                }
                if (res.body.data == 'Hello world!') {
                    done()
                } else {
                    new Error('接口数据异常！')
                }
            })
    })
})