// priority: 0

onEvent("recipes", event => {
  event.replaceInput({ id: "create:crafting/kinetics/super_glue" }, "create:iron_sheet", "kubejs:zinc_sheet");
  event.replaceInput({ id: "create:crafting/kinetics/chute" }, "create:iron_sheet", "kubejs:zinc_sheet");
  event.replaceInput({ id: "create:crafting/kinetics/propeller" }, "create:iron_sheet", "kubejs:zinc_sheet");
  event.replaceInput({ id: "create:crafting/kinetics/rope_pulley" }, "create:iron_sheet", "kubejs:zinc_sheet");
  event.replaceInput({ id: "create:crafting/kinetics/fluid_valve" }, "create:iron_sheet", "kubejs:zinc_sheet");
  event.replaceInput({ id: "create:crafting/logistics/redstone_contact" }, "create:iron_sheet", "kubejs:zinc_sheet");
});
