// priority: 0

onEvent("recipes", event => {
  event.remove({ id: "minecraft:bread" });
  event.remove({ id: "quark:tweaks/crafting/utility/bent/bread" });
  event.remove({ id: "quark:tweaks/crafting/utility/bent/cookie" });
  event.remove({ id: "dynamictrees:dirt_bucket" });
  event.remove({ id: "create:milling/andesite" });
  event.remove({ id: "cavesandcliffs:copper_ingot_from_smelting_deepslate_copper_ore" });
  event.remove({ id: "cavesandcliffs:copper_ingot_from_blasting_deepslate_copper_ore" });
});
