"use client"

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface largeContent {
    title: string;
    content: string[];
    link?: Link[];
    list?: List[]
    content2?: string[]

  }
  
  interface Accordion {
    id: string;
    trigger: string;
    content?: string[];
    largeContent?: largeContent[];
    extraText?: boolean;
}

interface Link {
    url: string;
    text: string
}

interface List {
    title?: string;
    description?: string;
}

export default function FAQ(){
    const accordion: Accordion [] = [
        {
            id: '1',
            trigger: 'Términos y condiciones servicio de envíos y casillero en Miami',
            content: [
                'Al contratar el servicio de Envíos internacional y Casillero en Miami, usted como Cliente se sujeta a las disposiciones del presente documento y sus anexos establecidos por TERRAMARE GROUP S.A.C. (en adelante CABO Courier), una empresa de servicios de Courier con personería jurídica de derecho privado, domiciliada en Perú e identificada con RUC Nº 20609230585',
                'El servicio de Envíos y casillero en Miami se regirá bajo los siguientes procedimientos, términos y condiciones:'
            ],
            largeContent: [
                {
                    title:'1. Descripción del Servicio de Casillero',
                    content: [
                        "El Cliente solicitara a la empresa CABO Courier la recepción y el transporte internacional de su mercancía, pago de impuestos aduaneros y reparto a domicilio desde dentro de Peru. Una vez que el Cliente se registre, CABO Courier le asignara al Cliente una casilla única o “Virtual Code”, con el que se identificará todas las mercancías que serán recibidas en la bodega de Miami con autorización del Cliente.",
                        "Cuando el Cliente confirme la compra de sus productos y estos lleguen a su casillero en las bodegas de CABO Courier, se le notificará al Cliente a través de correo electrónico indicando su código, número de warehouse asignado, número de bultos, peso y número de tracking de rastreo utilizado por el servicio de envío de su proveedor o tienda en Estados Unidos. Este mensaje constituye el único medio de prueba de recepción de sus paquetes por parte de CABO Courier. El Cliente deberá responder, en un plazo máximo de 7 días hábiles, indicando las instrucciones de Envío, y adjuntará los documentos necesarios para su desaduanaje en Perú (factura u orden de compra, su traducción u otro que fije la autoridad competente).",
                        "Una vez recibidas las mercancías y con el previo pago de los servicios, CABO Courier enviara la mercancía hasta Peru por carga aérea hasta la dirección del cliente, en un plazo aproximado de 10 días hábiles. Pudiendo extenderse el plazo por motivos ajenos al servicio ofrecido por la empresa. CABO Courier efectuará todos los trámites y diligencias necesarias para que el cliente tenga la mejor experiencia de compra.",
                    ]
                },
                {
                    title:'2. Valor del Servicio de Casillero',
                    content:[
                        'El Cliente con CABO Courier no pagara por concepto de registro. La asignación de la dirección personal e EEUU será gratuita y automática una vez que llene correctamente todos los campos en el formulario de registro.',
                    ]
                },
                {
                    title: '3. Responsabilidades del Cliente y la Empresa',
                    content: [
                        'El Cliente certifica ser el dueño de la mercancía o productos que son recibidos y transportados a su nombre por CABO Courier. El contenido o la naturaleza de los productos a transportar o transportados no serán responsabilidad de CABO Courier. El servicio de la empresa cumple con toda la normativa vigente del transporte internacional de courier y carga, internación y pago de impuestos aduaneros aplicables según el tipo de producto y categoría a la cual pertenece. Sera obligación del cliente informarse con anterioridad, conocer, aceptar, y cumplir con las normas de transporte y regulación aduanera asumiendo toda la responsabilidad del caso. Sera obligación del cliente indemnizar a CABO Courier y/o a terceros por cualquier perjuicio o daño por el incumplimiento de las normas y las condiciones aceptadas al momento de su registro con la empresa.',
                        'Será responsabilidad del Cliente asumir todos los costos asignados a cada despacho de su producto. Entre los cuales están el flete internacional, manejo de la internación, los derechos arancelarios, impuestos según el tipo de producto o categoría (IGV), costos adicionales para los productos restringidos, costos de almacenamiento en caso que amerite y los costos de retorno, devolución o reexportación de la mercancía al remitente en caso que la autoridad lo requiera. CABO Courier no será responsable por las deficiencias o faltas que afecten la utilidad, o el propósito principal del producto transportado. En ninguna caso CABO Courier será responsable por el retraso en el transporte o en la entrega de algún envío, por razones no imputables a ella.',
                        'El Cliente acepta que los productos o paquetes recibidos en su casillero en Miami que no sean retirados o despachados por falta de pago del envío por parte del cliente serán eliminados después de 60 días sin responsabilidad alguna para la Empresa. El Cliente no responsabilizara a CABO Courier si alguno de sus proveedores, entrega sus embarques o productos mezclados, incorrectos o no señal su casillero correctamente. CABO Courier no aceptara ninguna responsabilidad por paquetes o productos cuyo comprobante de entrega no cuente con la firma de uno de nuestros trabajadores en Miami. En caso de algún reclamo por perdida, destrucción o daño El Cliente deberá presentar el reclamo dentro de 30 días corridos, desde que el paquete esté disponible o entregado en las bodegas de CABO Courier en Miami.',
                        'En el caso que el cliente requiera una reexportación de su compra. CABO Courier no se responsabilizara de realizar la devolución o retorno de la compra al país destino y será obligación del cliente efectuar dicho servicio, asumiendo todos los costos de envíos y aduaneros correspondientes. CABO Courier podrá asesorar al cliente con los pasos a seguir para realizar la reexportación.',
                    ]
                },
                {
                    title: '4. Derecho Prendario',
                    content: [
                        'El Cliente será responsable de pagar a CABO Courier, todos los costos asociados al envío de su mercancía o producto a través de transferencia bancaria y/o depósito en las cuentas corrientesa CABOCourier. El Cliente constituye y acuerda favor de CABO Courier el derecho de prenda sobre cualquier bien y mercancía que este en poder de la empresa, para garantizar el pago de cualquier costo de embarque, fletes, derechos aduaneros, almacenaje, o cualquier otro gasto que pudiera surgir bajo los servicios de CABO Courier. El derecho de prenda quedara sin efecto una vez que el cliente haya pagado el total adeudado por los servicios generados.'
                    ]
                },
                {
                    title: '5. Envios y Aduana',
                    content: [
                        'El Cliente autoriza a CABO Courier para que lo represente y realice todas las diligencias comerciales y trámites aduaneros necesarios para la importación de su mercadería, pudiendo otorgar poder a un Agente de Aduanas para el “desaduanamiento”. El Cliente releva a CABO Courier la obligación de rendir cuenta respecto del encargo conferido. Se deja constancia que la internación de ciertas mercaderías podría resultar afecta a una tramitación aduanera especial, circunstancia ajena a la voluntad de CABO Courier lo que retrasaría su entrega.',
                    ]
                },
                {
                    title: 'CABO Courier',
                    content: [
                        'elegirá la aerolínea que transportará los paquetes una vez recibidos los documentos e instrucciones necesarios para su desaduanaje. El plazo de llegada a oficina en Perú es de tres (5) días hábiles computados desde la confirmación de recepción vía email. Una vez llegados los Envíos a Perú, CABO Courier procederá al desaduanaje de los paquetes, siempre que el Cliente haya proporcionado los documentos e información con antelación al email envios@cabocourier.com y la mercancía contenida en el Envío no haya sido objeto de alguna medida de Acción de Control Extraordinaria o de naturaleza similar ordenada por aduanas de Perú u otra autoridad competente conforme a la normativa peruana vigente.',
                        'Luego de liberados los paquetes en aduanas de Perú, estos se trasladarán al almacén de CABO Courier para programar las entregas en el punto acordado con el Cliente. El tiempo de entrega de los paquetes a domicilio u oficina no se encuentra comprendido dentro del plazo mencionado en el primer párrafo del punto 1.',
                        'El horario de reparto es de 9:00 a.m. a 6:00 p.m., en caso de que la unidad no pueda efectuar la entrega dentro de dicho horario por causas imputables al Cliente o a CABO Courier, el paquete retornará al almacén de este último a fin de reprogramar su entrega en el próximo reparto. Los recargos por reparto a domicilio u oficina se sujetan a lo estipulado en el Anexo 1.',
                    ]
                },
                {
                    title: '6. Pérdida, daño y devolución del producto',
                    content: [
                        'En caso de pérdida o daño de la mercadería (entrega no conforme), el cliente tiene un plazo máximo de 5 días hábiles para realizar el reclamo formal por escrito enviando un mail a info@cabocourier.com (de lo contrario CABO Courier no se hará responsable por la pérdida o daño del o los productos). En el caso de una entrega no conforme CABO Couier se responsabilizara por el valor real de este y con un monto máximo a reembolsar de US$100.00. CABO Courier no será responsable por la pérdida de ingresos, utilidades, intereses, lucro o cualquier valor especial o sentimental para el cliente. Para retornos o devoluciones de cualquier mercancía desde su país a USA, El Cliente deberá revisar con anticipación las políticas de devoluciones o retornos de la tienda de origen, donde adquirió el producto y se responsabilizara por todos los costos asociados a dicho retorno o devolución.',
                        'CABO Courier no se hace responsable por paquetes que contengan estampillas, joyas, gemas o metales preciosos sin procesar, cheques, manuscritos, acciones, boletos o pasajes de viaje de cualquier clase, perecederos de toda clase, antigüedades, cristales, vidrios, porcelanas, equipos médicos, televisores plasma, LCD o de tecnología similar. Estos productos serán enviados bajo exclusiva responsabilidad y propio riesgo del Cliente. En el caso que el cliente desee podrá tomar un seguro adicional que cubra adecuadamente sus productos. Para eso deberá contactarnos a info@cabocourier.com previamente al despacho de la carga. Estos puntos aplican para envíos y servicios de casillero y encargo de CABO Courier.',
                    ]
                },
                {
                    title: '7. Servicio de Encarga tu Compra: Compramos en USA por ti',
                    content: [
                        'CABO Courier ofrece un servicio de “Encarga Tu Compra” para comprar cualquier producto que el cliente desee en cualquiera de las tiendas online dentro de USA. Para esto el Cliente deberá mandar un mail a la cuenta encargatucompra@cabocourier.com con el link del producto, cantidad, talla, medidas, color, etc (lo más específico posible para poder identificar el producto deseado). Posteriormente uno de nuestros especialistas de CABO Courier enviara un mail con la cotización del producto solicitado. En caso de aceptar, el Cliente deberá cancelar el servicio por cualquier medio de pago aceptado por la empresa. En el caso de existir variaciones significativas en el precio del producto solicitado, CABO Courier se reserva el derecho de anular la cotización y generar una nueva.',
                        'Una vez realizado el pago del servicio Encarga tu Compra se procederá a realizar la compra del producto solicitado por usted. Una vez el encargo llegue a la bodega de Miami, se le asignara el producto a la cuenta del cliente. El Cliente que solicita el servicio de encargo garantiza ser el dueño de los bienes que son comprados y transportados a su nombre por CABO Courier y exime de toda responsabilidad a la empresa por cualquier razón que sea. CABO Courier no será responsable por el retraso de la entrega de los productos hasta la bodega de Miami.',
                        'El Cliente que solicita el servicio de Encarga tu Compra. Entrega a CABO Courier la autorización especial para efectuar todas las diligencias comerciales y los trámites aduaneros para una correcta importación de su mercancía. En el caso que el cliente reciba algún producto con daño, defectuoso o equivocado. Este deberá enviar su reclamo en un plazo máximo de 5 días hábiles a encargatucompra@cabocourier.com desde que la carga es entregada. Cualquier solicitud recibida fuera de ese plazo no será aceptada.',
                    ]
                },
                {
                    title: '8. Termino de contrato y servicio de Casillero',
                    content: [
                        'Este servicio podrá ser cancelado por cualquiera de las partes en cualquier momento, sin expresión de causa o justificación alguna. Con previo aviso de treinta 30 días por escrito o electrónicamente. En caso de existir alguna deuda por parte del cliente, este deberá cancelar lo total adeudado dentro de los 30 días.',
                    ]
                },
                {
                    title: '9. Termino y servicios de entrega USPS',
                    content: [
                        'El Cliente acepta los términos de servicio de entrega de correspondencia del correo americano (USPS), de acuerdo a lo exigido a través de formulario a continuación: "In consideration of delivery of my or our (firm) mail to the agent name below, the addressee and agent agree:(1) the addressee or the agent must not file a change of addressee order with the Postal Service TM upon termination of the agency relationship; (2) the transfer of mail to another address is the responsibility of the addressee and the agent; (3) all mail delivered to the agency under this authorization must be prepaid with new postage when redeposited in the mails; (4) upon request the agent must provide to the Postal Service all addressee to which the agency tranfers mail; and (5) when any information required on this form changes or becomes obsolete, the addressee(s) must file a revised application with the Commercial mail Receiving Agency (CMRA).'
                    ],
                    link: [
                        {
                            url:'https://cabocourier.com/archivos/usps/form_usps.pdf',
                            text:'Formulario Completo https://cabocourier.com/archivos/usps/form_usps.pdf'
                        }
                    ]
                },
                {
                    title: '10. Envios del Proveedor Compra en USA y Servicio de consolidación',
                    content: [
                        'CABO Courier no se hace responsable si su proveedor (tienda) envía sus compras con trackings distintos o en envíos separado, por lo que el cobro se hará sobre el embalaje en las mismas condiciones de recepción. Es de absoluta responsabilidad de su proveedor consolidar las cargas si es que se realiza más de una compra en la misma tienda.',
                        'El servicio de consolidación de CABO Courier es gratis y solo para clientes VIP o clientes que tengan algún convenio especial con ourier. El cliente que tenga este beneficio deberá enviar un mail a info@cabocourier.com o a su ejecutivo comercial solicitando el servicio enviando sus compras (facturas) y trackings a consolidar. Solo se podrá consolidar máximo 3 compras o trackings en un plazo no mayor a siete ¡(7) días, es decir, Todos los productos que lleguen de lunes a viernes de la misma semana serán consolidados gratis. Esto es siempre cuando el cliente nos mande los trackings number antes de que lleguen sus compras a la bodega de CABO Courier, de lo contrario no se realizara dicho servicio y se despacharan de forma individual. No se consolida en temporada alta. Es decir, durante todo el mes de Diciembre. Responsabilidad de CABO Courier, exclusiones y solución de controversias'
                    ]
                },
                {
                    title: '14. Productos Especiales y de naturaleza frágil',
                    content: [
                        'Los Envíos que contengan mercancía frágil tales como pantallas, vidrios, cartón, cuadros, retratos, materiales de porcelana u otros que, por su naturaleza, son susceptibles de deteriorarse, quebrarse, o destruirse con facilidad deberán ser entregados a CABO Courier con un embalaje adecuado para su conservación. Sin embargo, queda expresado que CABO Courier no será responsable en ningún caso por el deterioro, pérdida o destrucción durante el transporte de estas mercancías frágiles.'
                    ]
                },

                {
                    title: '15. Retraso y Envío de documentación por parte del Cliente',
                    content: [
                        'Queda aquí expresado que el Cliente es responsable de enviar los documentos necesarios para el embarque y desaduanaje de sus paquetes o documentos reportados por CABO Courier en un plazo máximo de siete (7) días hábiles. Luego de vencido dicho plazo y siempre que el Cliente no haya enviado instrucciones junto con los documentos requeridos para su transporte a Perú, se procederá a computar el fee adicional por concepto de almacenaje, el mismo que asciende a $10.00 (Diez dólares americanos con 00/100) por cada 15 días con un cobro mínimo de $10.00 (Diez dólares americanos con 00/100).'
                    ]
                },

                {
                    title: '16. Sobre el In and Out o entrada y salida de paquetes o documentos',
                    content: [
                        'Todo paquete o documento que ingrese al warehouse de CABO Courier en los Estados Unidos de América deberá embarcarse exclusivamente por el transporte designado por esta. Sin embargo, el Cliente tiene derecho a solicitar el retiro o pick up de sus paquetes o documentos previo pago de un fee por concepto de In and Out mínimo de $ 40.00 (Cuarenta dólares americanos con 00/100) por guía o warehouse reortado.'
                    ]
                },

                {
                    title: '17. Abandono en origen de paquetes o documentos',
                    content: [
                        'CABO Courier considerará que un paquete o documento es dejado en calidad de abandono en origen luego de transcurridos 30 días calendarios sin que se hayan enviado instrucciones de embarque ni los documentos requeridos para su transporte a Perú, luego de lo cual el Cliente libera a CABO Courier de cualquier responsabilidad por pérdida, deterioro o destrucción de estos. Asimismo, queda expresado que CABO Courier podrá disponer libremente, luego de dicho periodo, de los paquetes o documentos en calidad de abandono en origen, e incluso, compensar con el valor de dicha mercancía las deudas pendientes que el Cliente pudiera mantener con CABO Courier.'
                    ]
                },

                {
                    title: '18. Sobre el pago de impuestos',
                    content: [
                        'Es responsabilidad del Cliente informarse respecto del pago de impuestos y/o aranceles por las mercancías que ingresen al Perú. Los Envíos cuyo valor FOB sea menor a USD $ 200.00 (Doscientos y 00/100 dólares americanos) no pagarán impuestos en Perú. No obstante, el Cliente entiende que el valor en Aduanas de los Envíos podría ser distinto al de la factura declarada, lo que podría determinar el pago de impuestos y/o aranceles.',
                        "Ajuste de valor: El Cliente conoce que el ajuste de valor y la orden de pago de impuestos son efectuados por el personal de Aduanas en Perú y ello se determina en función a la normativa aduanera vigente. CABO Courier no será responsable por el ajuste de valor y la eventual determinación del pago de impuestos a que haya lugar, lo cual será informado al Cliente a fin de que efectúe el pago de estos y así obtener la liberación de la mercancía.",
                        'Abandono legal: En caso de no efectuar el pago de los impuestos correspondientes o no remitir la documentación sustentadora para culminar la nacionalización del Envío, este quedará en calidad de Abandono Legal conforme a la normativa aduanera vigente y eximirá a CABO Courier de la obligación de culminar el proceso de nacionalización de este, sin perjuicio mantenerse el derecho de exigir los pagos por servicio administrativo, flete y otros que son exigibles desde el embarque en origen.',
                    ]
                },

                {
                    title: '19. Embarques y fechas de llegada',
                    content: [
                        'CABO Courier, se reserva el derecho de escoger la aerolínea, empresa consolidadora de carga o agente de carga internacional que efectuará el transporte de los Envíos, siempre procurando asegurar la integridad, seguridad, celeridad y garantía de fechas de llegada. Sin embargo, el Cliente entiende que los plazos y fechas pueden extenderse en función a disponibilidad de vuelos, de las condiciones de vuelo, capacidad y/o volumen de carga, llegada de vuelos parciales, retrasos en los procesos logísticos del depósito temporal de destino y demás causas no imputables a CABO Courier, las mismas que serán informadas en su oportunidad.',
                    ]
                },

                {
                    title: '20. Reajuste de tarifas',
                    content: [
                        'El Cliente, conoce y acepta que puede haber un aumento en el costo de las tarifas ofrecidas al momento de la afiliación debido a cambios en la disponibilidad de la aerolínea, costos de flete de aerolíneas, gastos adicionales extraordinarios que, por demanda, escasez de vuelos o temporada alta ocasionen un aumento en los costos de transporte a Perú de los paquetes. A fin de priorizar el Envío de los paquetes, CABO Courier se reserva el derecho de avisar previamente el ajuste o aumento a que haya lugar, sin perjuicio de la obligación de consignarlo en la boleta o factura comercial.',
                        'Falta de entrega de paquetes y pruebas de entrega: En caso de discrepancia entre la prueba de entrega señalada por el Courier designado por el proveedor en origen y la ausencia física del paquete o documento en el warehouse de CABO Courier por falta de entrega, prevalecerá lo señalado por este último. En este supuesto, el Cliente deberá dirigir los reclamos por falta de entrega a su proveedor o Courier de origen.'
                    ]
                },
                {
                    title: '21. Límite de responsabilidad por pérdida, deterioro, destrucción o robo',
                    content: [
                        'En caso de deterioro parcial o total, pérdida o robo de la paquetería y/o documentación por negligencia o causas imputables a CABO Courier, tanto en el warehouse de CABO Courier en los Estados Unidos de América como en oficina de CABO Courier en Perú, la responsabilidad de CABO Courier limitará al valor de los paquetes o documentos en factura con un límite de USD $100.00 (Cien y 00/100 dólares americanos) por Envío.',
                        'CABO Courier no será responsable por el deterioro parcial o total, robo o pérdida de paquetería y/o documentación cuando ello ocurra en instalaciones o durante el manipuleo por parte del personal de la línea aérea, punto de llegada, depósito temporal u otro intermediario distinto a CABO Courier.',
                    ]
                },
                {
                    title: '22. Falsedad y actos contra la buena fe comercial',
                    content: [
                        'El Cliente es responsable por los documentos, datos y demás información que brinde a CABO Courier. Sin embargo, CABO Courier se reserva el derecho de verificar la veracidad de la información brindada, así como también el derecho de rechazar todo documento que contravenga la normativa aduanera vigente o falte a la verdad, sin perjuicio de las responsabilidades administrativas y penales que determine la autoridad competente en una fiscalización.'
                    ]
                },
                {
                    title: '23. Quejas y reclamos',
                    content: [
                        'En caso de existir alguna queja o reclamo respecto de los servicios prestados o por atención al Cliente, estos se podrán enviar a info@cabocourier.com, luego de lo cual CABO Courier responderá en un plazo máximo de 20 días calendarios y procurará brindar una solución adecuada sobre el particular. Sin perjuicio de ello, el Cliente tiene derecho a ingresar un reclamo en el Libro de reclamaciones virtual habilitado en el portal web',
                    ],
                    link: [
                        {
                            text: "web www.cabocourier.com",
                            url: 'web www.cabocourier.com'
                        }
                    ]
                },
                {
                    title: '24. Solución de controversias',
                    content: [
                        'Ante cualquier inconveniente o disconformidad por la prestación del servicio tanto CABO Courier como el Cliente tratarán de resolver el mismo conforme a las reglas de común intención y buena fe entre las partes. Y, en caso de no llegar a algún acuerdo, tanto CABO Courier como el Cliente aceptan renunciar expresamente al fuero de sus domicilios y acuerdan someterse a la jurisdicción competente del distrito de Lima Cercado.'
                    ],
                },

            ]


        },
        {
            id:'2',
            trigger: 'Política de Privacidad',
            content: [
                'La presente Política de Privacidad establece los términos en que CABO Courier usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web.'
            ],
            largeContent: [
                {
                    title: 'CABO Courier',
                    content: [
                        'esta comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de informacion personal con la cual usted pueda ser identificado, lo hacemos asegurando que solo se empleara de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que esta de acuerdo con dichos cambios.'
                    ]
                },
                {
                    title: 'Información que es recogida',
                    content: [
                        'Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Asimismo, cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.'
                    ]
                },
                {
                    title: 'Uso de la información recogida',
                    content: [
                        'Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.'
                    ]
                },
                {
                    title: 'CABO Courier ',
                    content: [
                        ' está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.'
                    ]
                },
                {
                    title: 'Cookies',
                    content: [
                        'Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.',
                        'Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.',
                    ]
                },
                {
                    title: 'Enlaces a Terceros',
                    content: [
                        'Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de click en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.'
                    ]
                },
                {
                    title: 'Control de su información personal',
                    content: [
                        'En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.',
                        'Esta empresa no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.'
                    ]
                },
                {
                    title: 'CABO Courier',
                    content: [
                        'se reserva el derecho de cambiar los términos de la presente Política de Privacidad asi como los precios de sus servicios en cualquier momento.'
                    ]
                }
            ]
        },
        {
            id:'3',
            trigger: 'Aviso Legal',
            largeContent: [
                {
                    title:'1. OBJETO',
                    content: [
                        'Este Aviso Legal regula la utilización por parte de los usuarios de las páginas web contenidas en el sitio en Internet (https://cabocourier.com en adelante “sitio web”), propiedad de TerraMare Group S.A.C. (en adelante CABO Courier) con RUC 20602798730, partida electrónica 14922860 según consta en el registro de personas jurídicas de la Oficina Registral del Lima, Zona Registral N° IX, sede Lima, la cual ha sido diseñada para facilitarle a usted (en adelante el “Usuario”) el acceso a la más completa información de nuestros servicios.'
                    ]
                },
                {
                    title:'2. CONDICIONES GENERALES DE USO',
                    content: [
                        'Las presentes condiciones generales de uso tienen por finalidad regular tanto la puesta a disposición de la información publicada en este sitio web, como las relaciones entre CABO Courier y los usuarios del mismo. En el caso de que no esté de acuerdo en someterse a las condiciones aquí reflejadas, por favor no haga uso de este sitio web.',
                        'Con carácter general, el usuario se obliga al cumplimiento de las presentes condiciones de uso y, en su caso, de las condiciones particulares que fueran de aplicación, así como a cumplir las especiales advertencias e instrucciones contenidas en las mismas o en cualquier otro lugar del sitio web, y a obrar siempre conforme a la ley, a las buenas costumbres y a las exigencias de la buena fe, empleando la diligencia adecuada a la naturaleza del servicio, absteniéndose de utilizar el sitio web de cualquier forma que pueda impedir, dañar o deteriorar el normal funcionamiento del mismo, los bienes o derechos de CABO Courier, de sus proveedores, colaboradores, usuarios o, en general, de cualquier tercero.',
                        'La información de esta página Web se proporciona sin garantía de ninguna clase, y podrá cambiarse o actualizarse sin previo aviso. Queda expresamente prohibido cualquier alteración, cambio, modificación o adaptación de esta página Web o de cualquier información que la misma contenga.',
                        'En ningún caso, la información contenida en la Página web deberá considerarse como exhaustiva, completa o que de cualquier forma pueda satisfacer todas las necesidades del Usuario. En algunos casos, la información contenida en la Página Web simplemente está destinada a que el Usuario pueda acceder a mayor cantidad de datos sobre el tema de su interés en el marco de los servicios prestados por CABO Courier.',
                    ]
                },
                {
                    title: '3. PROPIEDAD INTELECTUAL E INDUSTRIAL',
                    content: [
                        'Todos los contenidos que se muestran en el sitio web, y en especial, marcas, nombres comerciales, diseños, textos, fotografías, animaciones, videos, sonidos, gráficos, logos, íconos, botones y código fuente están sujetos a derechos de propiedad intelectual o industrial de CABO Courier, o en su caso, de terceros titulares de los mismos que han autorizado debidamente su inclusión en el sitio web.',
                        'En relación con los contenidos del presente sitio web, en ningún caso se entenderá que se concede licencia alguna o que se efectúa ninguna renuncia o transmisión de derechos, ni total ni parcial, en materia de propiedad intelectual e industrial.',
                        'Únicamente se autoriza el establecimiento de enlaces/links a la página de inicio del sitio web https://cabocouier.com/ No está permitido bajo ningún concepto el empleo de técnicas de “framing” (cargar una página web ajena enmarcada dentro de una página web propia), u otras similares.',
                        'Queda terminantemente prohibida la alteración del contenido o estructura de esta página web por parte del usuario'
                    ]
                },
                {
                    title: 'CABO Courier',
                    content: [
                        'se reserva la posibilidad de ejercer las acciones judiciales que correspondan contra los usuarios que violen o infrinjan los derechos de propiedad intelectual e industrial.'
                    ]
                },

                {
                    title:'4. OBLIGACIONES DE LOS USUARIOS',
                    content: [
                        'El usuario se compromete al uso diligente, correcto, lícito y de conformidad a las normas peruanas y al presente Aviso Legal. Así mismo, se compromete a no reproducir o copiar, no distribuir, no transformar y no modificar ningún tipo de contenido del sitio web, a excepción de que cuente con la autorización expresa de CABO Courier o con la autorización expresa, del legítimo titular de los derechos sobre los contenidos antes mencionados.',
                        'El usuario se obliga, en la utilización de este sitio web, así como en la prestación de los servicios, con carácter enunciativo y no limitativo, a:',
                        'En caso de utilización de formularios, a proporcionar datos veraces. Custodiar adecuadamente las claves de acceso que le puedan ser facilitadas por CABO Courier, comprometiéndose a no permitir su utilización por parte de terceros, asumiendo la responsabilidad por los daños y perjuicios que pudieran derivarse de un uso indebido de las mismas. Igualmente, el usuario se compromete a comunicar a CABO Courier con la mayor rapidez, su pérdida o robo, así como cualquier riesgo de acceso a la información sobre el sistema de acceso por parte de un tercero.',
                        'No utilizar identidades falsas, ni suplantar la identidad de otros en la utilización del sitio web, incluyendo la utilización en su caso de contraseñas o claves de acceso de terceros o de cualquier otra forma.',
                    ]
                },

                {
                    title:'5. CONFIDENCIALIDAD DE DATOS PERSONALES',
                    content: [
                        'CABO Courier pone en conocimiento de los usuarios de este sitio web, que podrá crear un archivo automatizado con los datos personales que sean puestos en conocimiento del referido titular, como consecuencia de la utilización de la presente web y a causa de envíos al correo electrónico que aparece como contacto o bien sobre aquellos recabados a través de nuestro formulario de contacto, en estricto cumplimiento con lo preceptuado por la legislación en materia de protección de datos personales. Los datos registrados podrían ser utilizados con la finalidad de efectuar estadísticas, la remisión de información institucional, incluso por medios electrónicos, la gestión de incidencias o la realización de estudios de mercado, entre otras actividades.'
                    ]
                },

                {
                    title:'6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD',
                    content: [
                        'El acceso al sitio web puede verse ocasionalmente suspendido o restringido para permitir reparaciones, tareas de mantenimiento o introducción de nuevas instalaciones o servicios. CABO Courier invertirá esfuerzos razonables para limitar la frecuencia y la duración de dicha suspensión o restricción. No obstante, podrá suspender, retirar o cancelar parcial o totalmente los contenidos y servicios no sometidos a contratación específica en cualquier momento y sin necesidad de aviso previo. CABO Courier excluye cualquier tipo de responsabilidad por los daños y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad de continuidad del funcionamiento del sitio web o a la defraudación de la utilidad que los usuarios hubieren podido atribuir al sitio web. En particular, CABO Courier no asumirá ningún tipo de responsabilidad por los posibles fallos en el acceso a las distintas páginas del sitio web de su propiedad.',
                        'La conexión a Internet, necesaria para acceder al servicio, no es en ningún caso suministrada por CABO Courier, se informa al usuario de que las comunicaciones de datos a través de redes abiertas no son seguras, y que es responsabilidad del usuario adoptar todas las medidas técnicas adecuadas para controlar razonablemente los riesgos y evitar posibles daños en sus equipos, pérdida de datos y robo de información confidencial. A estos efectos, debe tener sistemas actualizados de detección de software malicioso, así como tener actualizados los parches de seguridad de los correspondientes navegadores que utilice. Para más información puede acudir a su proveedor de servicios de acceso a Internet.',
                        'CABO Courier. excluye toda responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse al conocimiento que puedan tener terceros no autorizados de la clase, condiciones, características y circunstancias del uso que los usuarios hacen del sitio web.',
                        'El Usuario responderá de los daños y perjuicios de toda naturaleza que CABO Courier pueda sufrir como consecuencia del incumplimiento de cualquiera de las obligaciones a las que queda sometido por el presente aviso legal. El Usuario es consciente y acepta voluntariamente que el uso de cualesquiera contenidos de esta página Web tiene lugar, en todo caso, bajo su única y exclusiva responsabilidad.',
                        'La página Web, se encuentra amparada por las disposiciones de previstas en la Ley 23 de 1982, artículos 12 y 30 y la Decisión 351 del Acuerdo de Cartagena (para el caso peruano) y por las disposiciones del Copyright Act de 1976 de Estados Unidos de América.',
                    ]
                },

                {
                    title:'7. HIPERVÍNCULOS',
                    content: [
                        'Los enlaces (hipervínculos o accesos) contenidos en este sitio web pueden dirigir a páginas web de terceros. CABO Courier no asume ninguna responsabilidad derivada de la conexión, contenidos, informaciones o servicios que pudieran aparecer en dichos sitios, y que en ningún caso son vinculantes para CABO Courier.'
                    ]
                },

                {
                    title:'8. COOKIES',
                    content: [
                        'La información que genera la cookie acerca de su uso del sitio web (incluyendo su dirección IP) será directamente transmitida y archivada por Google en los servidores de web empresa, Google usará esta información por cuenta nuestra con el propósito de seguir la pista de su uso del sitio web, recopilando informes de la actividad del sitio web y prestando otros servicios relacionados con la actividad del sitio web y el uso de Internet. Google podrá transmitir dicha información a terceros cuando así se lo requiera la legislación, o cuando dichos terceros procesen la información por cuenta de Google. Google no asociará su dirección IP con ningún otro dato del que disponga Google.',
                        'Usted puede rechazar el tratamiento de los datos o la información rechazando el uso de cookies mediante la selección de la configuración apropiada de su navegador, sin embargo, debe usted saber que si lo hace puede ser que no pueda usar la plena funcionabilidad de este sitio web. Al utilizar este sitio web usted consiente el tratamiento de información acerca de usted por Google en la forma y para los fines arriba indicados.',
                    ]
                },

                {
                    title:'9. LEY APLICABLE, CONCILIACIÓN Y JURISDICCIÓN',
                    content: [
                        'El presente Aviso Legal se regirá e interpretará de acuerdo con las leyes de Perú. En caso de conflicto, dificultad o controversia respecto de cualquier materia del presente Aviso Legal, este será sometido a la jurisdicción de los Tribunales de Lima, siempre que ello no contravenga la legislación vigente.',
                        'Toda controversia será resuelta directamente por el Usuario y CABO Courier, para cuyo efecto se comprometen a realizar sus mayores esfuerzos para la solución armónica de sus controversias con base en las reglas de la buena fe y atendiendo a la común intención expresada en el presente Acuerdo, en un plazo máximo de quince (15) días hábiles.',
                        'De no lograrse un acuerdo, el conflicto se someterá al procedimiento Arbitral en el Centro de Análisis y Resolución de Conflictos de la Pontificia Universidad Católica del Perú. El arbitraje se llevará a cabo en la ciudad de Lima, será administrado por el Centro de Análisis y Resolución de Conflictos de la Pontificia Universidad Católica del Perú, se sujetará al Reglamento de Arbitraje del referido Centro y no podrá exceder de sesenta (60) días calendario desde la instalación del tribunal arbitral, pudiendo prorrogar dicho plazo por causas justificadas.',
                        'La dirección de correo electrónico de contacto es la siguiente info@cabocourier.com,',
                        'Asimismo, el nombre de dominio, titularidad de CABO Courier, es “cabocourier.com”.',
                        '© CABO Courier, 2022 Todos los derechos reservados.'
                    ]
                },


            ]
        },
        {
            id:'4',
            trigger: 'Términos y condiciones de uso de canal “Contáctate con nosotros”',
            content: [
                'Los presentes Términos y Condiciones de uso tienen por objeto informarle respecto al funcionamiento del “CONTÁCTATE CON NOSOTROS” (en adelante, EL CANAL). CABO Courier, ha implementado este CANAL con la finalidad de que los visitantes de nuestra web principal obtengan información directa y veraz sobre nuestros servicios, y en su oportunidad, se concrete el servicio de casillero y envío de paquetería. La aceptación de los Términos y Condiciones de uso son un requisito indispensable para acceder y utilizar este CANAL como parte de los compromisos asumidos por CABO Courier, para cumplir con la normativa peruana vigente en materia de protección de datos.',
            ],
            largeContent:[
                {
                    title:'I. GLOSARIO',
                    content: [
                        'Los siguientes términos, sea en plural o singular, en tanto sean utilizados en los presentes Términos y Condiciones de uso, tendrán el siguiente significado:'
                    ],
                    list:[
                        {
                            title:'USUARIO:',
                            description: 'Persona que no posee una relación jurídica contractual con TERRAMARE GROUP S.A.C., pero desea obtener información (al detalle) sobre los servicios que esta última presta a traves de su marca CABO Courier.'
                        },
                        {
                            title:'LEY PERUANA VIGENTE:',
                            description: 'Ordenamiento jurídico de la República del Perú.'
                        },
                        {
                            title:'NORMATIVA PERUANA VIGENTE EN MATERIA DE PROTECCIÓN DE DATOS:',
                            description: ' significa, conjuntamente, la Ley 29733, Ley de Protección de Datos Personales, su reglamento, y disposiciones modificatorias; así como cualquier disposición normativa del ordenamiento jurídico peruano que regule la materia de tratamiento de datos personales en la República del Perú.'
                        },
                    ]
                },
                {
                    title:'II. CONDICIONES LEGALES PARA LA ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES DE USO:',
                    content: [
                        'Para aceptar los presentes Términos y Condiciones de uso, el usuario y/o cliente reconoce que cumple lo siguiente:',
                    ],
                    list:[
                        {
                            description: '1 Es mayor de edad, conforme a la Ley peruana vigente. Si es menor de edad, por favor abstenerse de utilizar la herramienta.',
                        },
                        {
                            description: '2, Es hábil en el idioma español.'
                        },
                        {
                            description: '3 Se encuentra en pleno uso de sus facultades mentales y no adolece de vicio que afecte sus razonamiento, entendimiento y manifestación de voluntad. Por lo tanto, tiene plena capacidad civil, de acuerdo con la Ley peruana vigente.'
                        },
                        {
                            description: '4 Ha leído íntegramente los Términos y Condiciones de uso'
                        },
                        {
                            description: '5 Actúa y declara únicamente por sí mismo y no en representación de terceros ni de menores de edad conforme a la Ley peruana vigente.'
                        },
                    ]
                },
                {
                    title:'III. TRATAMIENTO DE DATOS PERSONALES',
                    content: [
                        'La protección de datos de carácter personal obliga a TERRAMARE GROUP S.A.C. a respetar el derecho a la intimidad y la privacidad de los titulares de los datos personales que tiene o sean recogidos y almacenados a causa de la ejecución de sus actividades. Por ello, TERRAMARE GROUP S.A.C. cumple las obligaciones formales y sustantivas que normativa peruana vigente en materia de protección de datos impone a quienes tratan datos de carácter personal, así como respeta y facilita el ejercicio de los derechos ARCO que la misma normativa reconoce a sus titulares.'
                    ],
                    list:[
                        {
                            title:'1 CONSECUENCIAS DE OTORGAR LOS DATOS PERSONALES',
                        },
                    ],
                    content2: [
                        'Luego de que el usuario acepta haber leído los apartados anteriores, manifiesta su conformidad con proporcionar sus datos personales a TERRAMARE GROUP S.A.C., con el objetivo de que los visitantes de nuestra web principal obtengan información directa y veraz sobre nuestros servicios, y en su oportunidad, se concrete la suscripción de un contrato. De no aceptar los términos y condiciones, no accederá al uso del canal “contáctate con nosotros”.'
                    ]
                }
            ]
        },
        {
            id:'5',
            trigger: 'Mercadería Prohibida',
            largeContent: [
                {
                    title: 'Productos considerados como “mercancía prohibida”',
                    content: [
                        'CABO Courier siempre se preocupa por tus paquetes, por quien lo envía y por quien lo recibe. Por tal razón, queremos mantenerte informado y puedas tomar tus precauciones al momento de programar un envío.',
                        'Los productos que a continuación se mencionan son considerados prohibidos por la legislación peruana e internacional, y no se aceptarán para transporte.',
                    ]
                },
                {
                    title: 'Prohibidos por la legislación peruana: ',
                    content: [
                        'Armas con o sin licencia, componentes de cualquier tipo de arma, marihuana, cocaína, bienes regulados por el ministerio de cultura, restos arqueológicos, joyas incaicas, entre otros.'
                    ]
                },
                {
                    title: 'Prohibidos por legislación aérea: ',
                    content: [
                        'Joyas, objetos enchapados en plata, oro, cheques al portador, entre otros.'
                    ]
                },
                {
                    title: 'Productos perecibles: ',
                    content: [
                        'Frutas, carnes (bobino, vacuno, aves), entre otros',
                        'Revisa desde la página de SUNAT el listado de mercancía prohibida, aquí.',
                        'Los demás que los convenios y acuerdos internacionales consagren como prohibidos de circular por el servicio de correos.'
                    ]
                },
                {
                    title: 'Títulos de valor:',
                    content: [
                        'Todo aquel que tenga por objetivo cobrar una semana de dinero. (Ejemplo: cheque negociable y no negociable, letra de cambio, pagaré, bono, certificado, libreta de ahorro, certificado de acciones, facturas, entre otros)',
                        'Click en este enlace para información sobre los anexos del procedimiento de mercancias restringidas y prohibidas INTA-PE.00.06',
                        'Si se detecta mercancía prohibida, esta no saldrá de nuestras bodegas. Según el producto detectado, se actuará de acuerdo a la Resolución Directoral N° 040-2001-MTC/15.20. En el caso que el objeto tuviera que ser devuelto al remitente, este será resguardado en un plazo de 48 horas, de lo contrario será considerado rezagado.'
                    ]
                },
                {
                    title: '¿A qué se denominan mercancías restringidas?',
                    content: [
                        'Las mercancías restringidas son aquellas que por mandato legal requieren la autorización de una o más entidades competentes para ser sometidas a un determinado régimen aduanero.'
                    ]
                },
                {
                    title: '¿Cuál es el objetivo de prohibir o restringir una mercancía?',
                    content: [
                        'Las mercancías restringidas son aquellas que por mandato legal requieren la autorización de una o más entidades competentes para ser sometidas a un determinado régimen aduanero. Esguardar la seguridad nacional, el derecho a la vida, a la salud, al medio ambiente, etc.'
                    ]
                },
                {
                    title: '¿Dónde puedo obtener la relación de mercancías restringidas y/o prohibidas?',
                    content: [
                        'Para descargar la lista de mercancías restringidas y prohibidas según entidad de control, lo puede hacer a través de: Anexos relativos al Procedimiento de Mercancías Prohibidas y Restringidas.'
                    ]
                },
                {
                    title: '',
                    content: []
                },
            ]

        }
    ]
    return(
        <main className="px-20 py-10">
             <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col space-y-5"
          >
            {accordion.map((items, index) => (
              <AccordionItem
                key={index}
                value={items.id}
                className="border-2 border-zinc-300 pt-[18px] pr-[40px] pb-[17px] pl-[20px]"
              >
                <AccordionTrigger className="text-start">
                  {items.trigger}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-3">
                        {items.content && (
                            (items.content.map((text, index) => (
                                <p className="text-muted-foreground" key={index}>{text}</p>
                            )))

                        )}
                    </div>

                  {items.largeContent && (
                    <div className="flex flex-col mt-3 space-y-5">
                      {items.largeContent.map((item, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                          <h3 className="font-bold text-zinc-500">
                            {item.title}
                          </h3>
                          <div className="text-muted-foreground inline-flex flex-col space-y-3">
                            {item.content}
                          </div>
                              {/* if link */}
                          {item.link && (
                            (item.link.map((item, index) => (

                                <Link key={index} href={item.url}>{item.text}</Link>
                            )))
                          )}

                          {/* if list */}

                          {item.list && (
                            <div className="flex flex-col space-y-3 px-10">

                                {item.list.map((item, index) => (
                                    <div className="flex flex-col space-y-2" key={index}>
                                        {item.title && (
                                            <h3 className="text-md text-muted-foreground font-bold">{item.title}</h3>
                                        )}
                                        {item.description && (
                                            <p className="text-muted-foreground">{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                          )}

                        {items.content2 && (
                            (items.content2.map((text, index) => (
                                <p className="text-muted-foreground" key={index}>{text}</p>
                            )))

                        )}  

                        </div>
                      ))}

                      {items.extraText === true && (
                        <p className="text-muted-foreground">
                          Click en este
                          <Link
                            className="font-bold cursor-pointer"
                            href="http://www.aduanet.gob.pe/aduanas/infoaduanas/clasifica/clasificacionarancelaria/entidad/anexosRestProhib.htm"
                          >
                            {" "}
                            enlace{" "}
                          </Link>
                          para informacion sobre los anexos del procedimiento de
                          mercancias restringidas y prohibidas INTA-PE.00.06
                        </p>
                      )}
                    </div>
                  )}
                 
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </main>
    )
}