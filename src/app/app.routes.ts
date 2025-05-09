import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { PedidosComponent } from "./components/pedidos/pedidos.component";
import { CargasComponent } from "./components/cargas/cargas.component";
import { StorageComponent } from "./components/storage/storage.component";
import { PreciosComponent } from "./components/precios/precios.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { RecibosComponent } from "./components/recibos/recibos.component";
import { SplitComponent } from "./components/split/split.component";
import { ReporteTiendasComponent } from "./components/reporte-tiendas/reporte-tiendas.component";
import { CuadrajeComponent } from "./components/cuadraje/cuadraje.component";
import { ConetendorEpqComponent } from "./components/conetendor-epq/conetendor-epq.component";
import { ReciboTiendaComponent } from "./components/recibo-tienda/recibo-tienda.component";
import { PedidoPlaneacionComponent } from "./components/pedido-planeacion/pedido-planeacion.component"
import { UbicacionesVaciasComponent } from "./components/ubicaciones-vacias/ubicaciones-vacias.component";
import { EstatusOlaComponent } from "./components/estatus-ola/estatus-ola.component"
import { OlaPzaContComponent } from "./components/ola-pza-cont/ola-pza-cont.component"
import { DetalleOlaComponent } from "./components/detalle-ola/detalle-ola.component"
import { LineasOlaComponent } from "./components/lineas-ola/lineas-ola.component";
import { DownloadsComponent } from "./components/downloads/downloads.component";
import { DownloadsAlmacenComponent } from "./components/downloads-almacen/downloads-almacen.component"
import { PorcentajeComponent } from "./components/porcentaje/porcentaje.component";
import { DownloadInventarioComponent } from "./components/download-inventario/download-inventario.component";
import { WaveAnalysisComponent } from "./components/wave-analysis/wave-analysis.component";
import { PedimentoComponent } from "./components/pedimento/pedimento.component";
import { PesoContenedorComponent } from "./components/peso-contenedor/peso-contenedor.component";
import { DownloadsContainerQc } from "./components/container-qc/container-qc.component";
import { ConfirmPending } from "./components/confirmacion-pendientes/confirmacion-pendientes.component";
import { ColsultKardex } from "./components/kardex/consult-kardex.component";
import { ConsultHuella } from "./components/huella-digital/huella-digital.component";
import { ContainerTypeUp } from './components/container-type-up/container-type-up.component';
import { DimensionItem } from './components/dimension-item/dimension-item.component';
import { WUReserveAssorted } from './components/wu-reserve.assorted/wu-reserve-assorted.component';
import { ItemLocation } from './components/item-location/item-location.component';
import { PricePromotion } from './components/prices-promotions/prices-promotions.component';
import { ShorpackDay } from './components/shorpack/shorpack.component';
import { InventoryAvailable } from './components/inventory-available/inventory_available.component';
import { SkuPriority } from './components/sku-priority/sku-priority.component';
import { Redireccion } from './components/redireccion/redireccion.component';
import { ReporteTi } from './components/reporteTi/reporteTi.component';
import { InventoryAvailableFurniture } from './components/inventario-disponible-muebles/inventario-disponible-muebles.component';

const APP_ROUTES : Routes = [
    { path:'home', component: HomeComponent},
    { path:'about', component: AboutComponent},
    { path:'heroes', component: HeroesComponent},
    { path:'articulos', component: ArticulosComponent},
    { path:'pedidos', component: PedidosComponent},
    { path:'cargas', component: CargasComponent},
    { path:'precios', component: PreciosComponent},
    { path:'storage', component: StorageComponent},
    { path:'inventario', component: InventarioComponent},
    { path:'recibos', component: RecibosComponent},
    { path:'split', component: SplitComponent},
    { path:'reporte-tiendas', component: ReporteTiendasComponent},
    { path:'cuadraje', component: CuadrajeComponent},
    { path:'contenedoresEpq', component: ConetendorEpqComponent},
    { path:'recibosTienda', component: ReciboTiendaComponent},
    { path:'pedidoPlaneacion', component: PedidoPlaneacionComponent},
    { path:'ubicacionVacia', component: UbicacionesVaciasComponent},
    { path:'estatusOla', component: EstatusOlaComponent},
    { path:'olaPzaCont', component: OlaPzaContComponent},
    { path:'detalleOla/:numOla', component: DetalleOlaComponent},
    { path:'lineasOla', component: LineasOlaComponent},
    { path:'downloads', component: DownloadsComponent},
    { path:'downloadsAlmacen', component: DownloadsAlmacenComponent},
    { path:'porcentaje', component: PorcentajeComponent},
    { path:'downloadInventario', component: DownloadInventarioComponent},
    { path:'waveAnalysis', component: WaveAnalysisComponent},
    { path:'pedimentos', component: PedimentoComponent},
    { path:'pesoContenedor', component: PesoContenedorComponent},
    { path:'containerQc',component: DownloadsContainerQc},
    { path:'confirmacion-pendientes', component: ConfirmPending},
    { path:'consult-kardex', component: ColsultKardex},
    { path:'huella-digital', component: ConsultHuella},
    { path:'container-type-up', component: ContainerTypeUp},
    { path:'dimension-item', component: DimensionItem},
    { path:'wu-reserve-assorted', component: WUReserveAssorted},
    { path:'item-location', component: ItemLocation},
    { path:'prices-promotions', component: PricePromotion},
    { path:'shorpack', component: ShorpackDay},
    { path:'inventory-available', component: InventoryAvailable},
    { path:'sku-priority', component: SkuPriority},
    { path:'redireccion', component: Redireccion},
    { path:'reporte-ti', component: ReporteTi},
    { path:'inventario-disponible-muebles', component: InventoryAvailableFurniture},
    { path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
