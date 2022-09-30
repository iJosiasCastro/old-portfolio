import Vue from 'vue'

Vue.filter('summarize', (text, lenght= 15) => {

    var result = ''
    var words = text.split(' ')
    words.slice(0, lenght).forEach(item => {
        result+=' '+item;
    });
    return result +' '+words[lenght]+'...';
})