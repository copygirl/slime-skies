// priority: 0

onEvent("recipes", event => {
  event.remove({ id: "minecraft:bread" });
  event.remove({ id: "quark:tweaks/crafting/utility/bent/bread" });
  event.remove({ id: "create:milling/andesite" });
});
