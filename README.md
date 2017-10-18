# OCC-ChatBot-Widget

The **Oracle Commerce Cloud ChatBot Widget** allows you to extend the [Oracle Commerce Cloud Service SaaS platform](https://cloud.oracle.com/commerce-cloud), giving your customers, the possibility to get support or scenarios such as, retriving, updating and cancelling orders without the support of a real customer agent.

***

## How to use it

You can [download](https://github.com/valdal14/OCC-ChatBot-Widget) the entire project, zip the **widget** folder and the **ext.json** file and upload the **.zip** folder in your **Oracle Commerce Cloud instance**. 

**NOTE:** You need an extension ID, it can be retrieved directly from your **Oracle Commerce Cloud instance**. Once obtained you have to update the **ext.json** file with the new key generated by the platform:

```javascript
{
  "extensionID": "EXTENSIONID-KEY",
  "developerID": "12345678",
  "createdBy": "Valerio D'Alessio",
  "name": "chatbotwidget",
  "version": 1,
  "timeCreated": "2017-08-30",
  "description": "chatbot widget for commerce cloud"
}
```
**NOTE:** You can use the official [Oracle Commerce Cloud Service Widget Development Guide](http://docs.oracle.com/cd/E65426_01/Cloud.15-3/WidgetDev/html/s0201developacustomwidget01.html) as reference.

## How works

Once you user is logged-in inside your **Oracle Commerce Cloud instance** an 'ASK FOR HELP' button will appear and the user can start interacting with the chatbot. 

![Start](https://github.com/valdal14/OCC-ChatBot-Widget/blob/master/picture/casadellibro.png?raw=true "Commerce Cloud Service ChatBot")

## Contribution

You can [download](https://github.com/valdal14/OCC-ChatBot-Widget) the source code and play with it if you want to improve it. Please bear in mind that this is only the Fron-End side of the chatbot, since in order to work properly it needs to be connected with an [Oracle IBCS environment](https://www.oracle.com/solutions/mobile/bots.html)
***

## License

Licence detail about the use of this project is available at the following [URL](https://github.com/valdal14/OCC-ChatBot-Widget/blob/master/LICENSE)