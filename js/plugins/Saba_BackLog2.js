(function() {
    'use strict';

    var _Game_Message_add = Game_Message.prototype.add;
    Game_Message.prototype.add = function(text) {
        Saba.BackLog.$gameBackLog.addLog('', text);
        _Game_Message_add.apply(this, arguments);
    };
})();