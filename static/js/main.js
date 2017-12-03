$(document).ready(function($) {
    //recorriendo el JSON con los datos de los productos
    $.getJSON("/items", function(json) {
        var contenido_de_productos;
        var productos_agregados = [];
        var total = 0;

        $.each(json.catalog, function(index, element) {
            contenido_de_productos = `<div class="producto_individual" id="`+element.id+`"">
                <img src="`+element.imageURL+`">
                <div class="producto_info">
                <p>`+element.name+`</p>
                <p>`+element.currency+``+element.price+`</p>
                </div>
                <button type="button" class="btn btn-success agregar">Add to Cart</button>
                </div>`;
            
            $("#productos").append(contenido_de_productos);
        });
        // Detectando el click en Add to Cart y clonando el producto al carro
        $("button.agregar").click(function(e){
            e.preventDefault();
            var id_producto = $(this).parent("div").attr("id");
            var contenedor_de_producto = $(this).parent("div").clone();
            // Modificando el texto del boton Add to Cart por Remove from Cart
            $("#carrito").append(contenedor_de_producto);
            $("#carrito").find('button').text('Remove from cart');
            $("#carrito").find('button').addClass('remover');
            $("#carrito").find('button').removeClass('agregar');
            productos_agregados.push(id_producto);
            totalCompra(productos_agregados);
            // Detectando el click en el boton Remove y removiendo el producto del carro
            $("button.remover").click( function(e){
                e.preventDefault();
                var remover_producto_id = $(this).parent("div").attr("id");
                var remover_producto = $(this).parent("div").remove();
                $.each(productos_agregados, function(cart_index, cart_element_id) {
                    if (remover_producto_id == cart_element_id) {
                        productos_agregados.splice(cart_index, 1);
                    }
                });
                totalCompra(productos_agregados);
            });
            // calculando el total de la compra para el boton de total
            function totalCompra (productos_agregados) {
                total = 0;
                $.each(json.catalog, function(index, element) {
                    $.each(productos_agregados, function(cart_index, cart_element_id) {
                        if (element.id == cart_element_id) {
                            total += element.price;
                        }
                    });
                });
                $("#total").text(total);
            }
        });
    });


});