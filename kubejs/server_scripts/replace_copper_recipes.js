// priority: 0

onEvent("recipes", event => {
  event.remove({ id: "create:crafting/materials/copper_ingot_from_compacting" });
  event.remove({ id: "create:crafting/materials/copper_ingot_from_decompacting" });
  event.remove({ id: "create:blasting/copper_ingot_from_ore" });
  event.remove({ id: "create:smelting/copper_ingot_from_ore" });

  event.remove({ id: "create:crafting/materials/copper_block_from_compacting" });
  event.remove({ id: "create:crafting/palettes/copper_shingles" });
  event.remove({ id: "create:crafting/palettes/copper_shingles_from_tiles" });
  event.remove({ id: "create:crafting/palettes/copper_tiles" });

  // event.replaceOutput({ id: "create:crafting/materials/copper_ingot_from_compacting" }, "create:copper_ingot", "cavesandcliffs:copper_ingot");
  // This doesn't appear to work, so ...
  event.remove({ id: "create:crafting/materials/copper_ingot_from_compacting" });
  event.shaped("1x cavesandcliffs:copper_ingot", [ "NNN", "NNN", "NNN" ], { "N": "#forge:nuggets/copper" });

  event.replaceOutput({ id: "create:blasting/copper_ingot_from_crushed" }, "create:copper_ingot", "cavesandcliffs:copper_ingot");
  event.replaceOutput({ id: "create:smelting/copper_ingot_from_crushed" }, "create:copper_ingot", "cavesandcliffs:copper_ingot");
});
