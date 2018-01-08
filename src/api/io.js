import conf from 'api/conf'
import axios from 'axios';
import qs from 'qs';
import storage from 'assets/js/storage'

const io = {
    configUrls: function () {
        this.questionList = conf.baseApiPath + '/api/question/questionList'
    },
    getHeaders: function () {
        const accessToken = storage.getAccessToken();
        return {
            accessToken
        }
    },
    post: async function (url, data, success, fail, timeout) {
        try {
            data = { accessToken: this.getHeaders().accessToken||"Q1VRVWNubXlFTXV6RFNlV1Vz", ...data }
            let formdata = qs.stringify(data);
            let res = await axios({
                url: url,
                method: 'POST',
                data: formdata,
                dataType: 'json',
                timeout: timeout || 30000
            });
            if (!res.data.success) {
                window.$notify.error({
                    title: '错误',
                    message: res.data.desc
                });
            }
            return res;
        } catch (err) {
            window.$notify.error({
                title: '错误',
                message: err.name
            })
        }
    }

}

io.configUrls()

export default io
