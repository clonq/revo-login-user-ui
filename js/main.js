clonq_revo_list_ui = {
    init: function(config){
        //todo: fix reload
        if(!!config.templates && !!config.templates.item) {
            $(document.createElement('script')).attr({id:"revo-list-ui-item-template",type:"text/x-handlebars-template"}).appendTo($('head'));
            $('#revo-list-ui-item-template').load(config.templates.item);
        }
        document.addEventListener("revo:ready", function (e) {
            if(!!config.dataLoadEvent) {
                var itemTemplateSrc = $("#revo-list-ui-item-template").text();
                var itemTemplate = Handlebars.compile(itemTemplateSrc);
                document.addEventListener(config.dataLoadEvent, function (e) {
                    var items = e.detail;
                    items.forEach(function(itemData){
                        var itemHtml = itemTemplate(itemData);        
                        $('#revo-list-ui .grid').append(itemHtml);
                    });
                });
            } else {
                console.log('clonq/revo-list-ui: no dataLoadEvent key')
            }
        });        
    }
}
