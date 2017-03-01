let ROOT = 'http://ebdjango-dev.eu-west-1.elasticbeanstalk.com/';

function get_urls(){
    let urls = {
        testService: ROOT + 'test/'
    }
    return urls;
}


export default get_urls;
