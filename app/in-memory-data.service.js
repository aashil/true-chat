"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var chats = [
            { id: 11, name: 'Mr. Nice', message: 'hello there' },
            { id: 12, name: 'Mr. Bullet', message: 'hello there' }
        ];
        return { chats: chats };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map