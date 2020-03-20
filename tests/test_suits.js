import should from 'should';
import app from '../index';
import request from 'supertest';

describe('API Test for Login', ()=>{
    it('should ensure login works well', (done)=>{
       request(app)
       .post('/login')
       .set("Connection", "keep alive")
       .set("Content-Type", "application/json")
       .send({email: "vivvaa.vivvaa@gmail.com", password: "12345678"})
       .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('success', true);
            res.body.should.have.property('message', "Authentication successful");
            res.body.should.have.property('user', "vivvaa.vivvaa@gmail.com");
            res.body.should.have.property('token');
        });
        done();
    });
    afterEach('ensuring everything is cleaned up', (done)=>{
        done();
    });
});

describe('API Test for protected routes', ()=>{
    var token; 
    beforeEach('verify token', (done)=>{
        request(app)
        .post('/login')
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .send({email: "vivvaa.vivvaa@gmail.com", password: "12345678"})
        .expect(200)
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('success', true);
            res.body.should.have.property('message', "Authentication successful");
            res.body.should.have.property('user', "vivvaa.vivvaa@gmail.com");
            res.body.should.have.property('token');
            token = res.body.token;
            done();
        });
       
    });
    var document = {"baz": "qux", "foo": "bar"};
    var patch = [{"op": "replace", "path": "/baz", "value": "soft"}];
    it('should ensure json patch works well',function(done){
        request(app)
        .patch('/json_patch')
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .send({token: token, mydoc: document, thepatch: patch})
        .end(function(err, res) {
            if (err) done(err);
            res.body.should.have.property('success',true);
            res.body.should.have.property('patcheddoc', "patcheddoc");
           
        });
        done();
      
    });

});
