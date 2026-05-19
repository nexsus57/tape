
export interface ProductSpecification {
    label: string;
    value: string;
}

export const PRODUCT_SPECIFICATIONS: Record<string, ProductSpecification[]> = {
    'safety-tapes-specification': [ // Generic if needed, but we match by id
        { label: 'Material', value: 'PVC / Vinyl / PE' },
        { label: 'Adhesive Type', value: 'Rubber / Acrylic Adhesive' },
        { label: 'Features', value: 'High Visibility, Waterproof, Abrasion Resistant' },
        { label: 'Applications', value: 'Safety Marking, Hazard Identification, Industrial Floors' },
        { label: 'Colors', value: 'Red, Yellow, Green, Blue, White, Black' },
        { label: 'Customization', value: 'Size and color customization available based on order quantity' },
    ],
    'hazardtape': [
        { label: 'Material', value: 'Soft PVC Film' },
        { label: 'Adhesive Type', value: 'Pressure Sensitive Adhesive' },
        { label: 'Features', value: 'High Visibility, Strong Adhesion, Chemical Resistant' },
        { label: 'Applications', value: 'Hazard Zones, Walkways, Safety Boundaries' },
        { label: 'Color Options', value: 'Black-Yellow, Red-White' },
        { label: 'Customization', value: 'Width and printing customization available based on bulk orders' },
    ],
    'floor-marking-tape': [
        { label: 'Material', value: 'Heavy-Duty PVC' },
        { label: 'Adhesive Type', value: 'Industrial Acrylic Adhesive' },
        { label: 'Features', value: 'Forklift Resistant, Durable, Easy Application' },
        { label: 'Applications', value: 'Warehouse Marking, 5S Floor Marking, Aisles' },
        { label: 'Finish', value: 'Gloss / Matte' },
        { label: 'Customization', value: 'Custom sizes and colors available for industrial requirements' },
    ],
    'coloured-anti-slip-tape': [
        { label: 'Material', value: 'PVC with Abrasive Coating' },
        { label: 'Adhesive Type', value: 'High Tack Adhesive' },
        { label: 'Features', value: 'Slip Resistant, Waterproof, Heavy Traffic Resistant' },
        { label: 'Applications', value: 'Staircases, Ramps, Industrial Floors' },
        { label: 'Grit Type', value: 'Fine / Medium / Coarse' },
        { label: 'Customization', value: 'Customized widths and colors available on request' },
    ],
    'caution-tape': [
        { label: 'Material', value: 'LDPE Film' },
        { label: 'Features', value: 'Weather Resistant, Tear Resistant, Lightweight' },
        { label: 'Applications', value: 'Construction Areas, Hazard Barricading' },
        { label: 'Print Options', value: 'Caution / Danger / Custom Printing' },
        { label: 'Customization', value: 'Printing and size customization available for bulk orders' },
    ],
    'barricade-tape': [
        { label: 'Material', value: 'Polyethylene Film' },
        { label: 'Features', value: 'UV Resistant, Outdoor Suitable, High Visibility' },
        { label: 'Applications', value: 'Restricted Areas, Crowd Control, Road Safety' },
        { label: 'Printing', value: 'Standard & Custom Branding Available' },
        { label: 'Color Options', value: 'Yellow-Black, Red-White' },
        { label: 'Customization', value: 'Custom printing and sizes available' },
    ],
    'tamper-proof-tape-1': [
        { label: 'Material', value: 'PET Film' },
        { label: 'Adhesive Type', value: 'Security Acrylic Adhesive' },
        { label: 'Features', value: 'VOID Message, Tamper Evidence, High Security' },
        { label: 'Applications', value: 'Courier, E-Commerce, Export Packaging' },
        { label: 'Printing', value: 'Custom Logo Printing Available' },
        { label: 'Customization', value: 'Sizes and branding available for bulk supply' },
    ],
    'nastro-heavy-duty-floor-marking': [
        { label: 'Material', value: 'Premium PVC' },
        { label: 'Adhesive Type', value: 'High Bond Rubber Adhesive' },
        { label: 'Features', value: 'Forklift Resistant, Long Durability, Easy Application' },
        { label: 'Applications', value: 'Warehouse Marking, Safety Walkways' },
        { label: 'Colors', value: 'Yellow, Red, Green, Blue, White' },
        { label: 'Customization', value: 'Industrial custom sizes available on request' },
    ],
    'glowindark': [
        { label: 'Material', value: 'Photoluminescent PVC / PET Film' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Emergency Visibility, Self-Glow, Waterproof' },
        { label: 'Applications', value: 'Exit Marking, Staircases, Safety Signage' },
        { label: 'Glow Color', value: 'Green' },
        { label: 'Customization', value: 'Custom widths and glow grades available' },
    ],
    'photoluminescent-film': [
        { label: 'Material', value: 'Photoluminescent PET / PVC Film' },
        { label: 'Adhesive Type', value: 'Self-Adhesive Acrylic' },
        { label: 'Features', value: 'Long Glow Performance, Flexible, High Brightness' },
        { label: 'Applications', value: 'Emergency Signs, Evacuation Routes, Safety Labels' },
        { label: 'Surface Compatibility', value: 'Acrylic, Metal, ACP Panels' },
        { label: 'Customization', value: 'Custom roll sizes available for projects' },
    ],
    'anti-skid-glow-in-dark': [
        { label: 'Material', value: 'PVC with Abrasive & Photoluminescent Strip' },
        { label: 'Adhesive Type', value: 'High Tack Adhesive' },
        { label: 'Features', value: 'Anti-Slip Surface, Glow Guidance, Waterproof' },
        { label: 'Applications', value: 'Staircases, Emergency Exits, Ramps' },
        { label: 'Colors', value: 'Black-Green Glow, Yellow-Green Glow' },
        { label: 'Customization', value: 'Custom sizes available for industrial use' },
    ],
    'esd-floor-marking': [
        { label: 'Material', value: 'Anti-Static PVC Film' },
        { label: 'Adhesive Type', value: 'Conductive Acrylic Adhesive' },
        { label: 'Features', value: 'Static Dissipative, Abrasion Resistant, Clean Removal' },
        { label: 'Applications', value: 'Electronics Industry, Cleanrooms, ESD Zones' },
        { label: 'Colors', value: 'Yellow, Black, Blue' },
        { label: 'Customization', value: 'Sizes customizable based on order quantity' },
    ],
    'glowindark-marking': [
        { label: 'Material', value: 'Photoluminescent PVC' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Self-Glowing, Emergency Visibility, Durable' },
        { label: 'Applications', value: 'Safety Routes, Fire Exit Marking, Industrial Guidance' },
        { label: 'Glow Color', value: 'Green' },
        { label: 'Customization', value: 'Custom sizes and glow strength available' },
    ],
    'anti-skid': [
        { label: 'Material', value: 'PVC with Silicon Carbide Abrasive' },
        { label: 'Adhesive Type', value: 'Industrial Grade Adhesive' },
        { label: 'Features', value: 'High Grip, Oil Resistant, Waterproof' },
        { label: 'Applications', value: 'Industrial Floors, Staircases, Loading Areas' },
        { label: 'Grit Options', value: 'Fine / Medium / Coarse' },
        { label: 'Customization', value: 'Width and color customization available' },
    ],
    'anti-slip-bathroom': [
        { label: 'Material', value: 'PEVA / PVC' },
        { label: 'Adhesive Type', value: 'Waterproof Acrylic Adhesive' },
        { label: 'Features', value: 'Barefoot Friendly, Water Resistant, Soft Texture' },
        { label: 'Applications', value: 'Bathrooms, Bathtubs, Swimming Pools' },
        { label: 'Colors', value: 'Transparent, White, Black' },
        { label: 'Customization', value: 'Sizes available as per requirement' },
    ],
    'silver-tc': [
        { label: 'Material', value: 'TC Fabric with Reflective Coating' },
        { label: 'Attachment Type', value: 'Sew-On' },
        { label: 'Features', value: 'Washable, Flexible, Durable' },
        { label: 'Applications', value: 'Safety Jackets, Uniforms, PPE Garments' },
        { label: 'Color', value: 'Silver Grey' },
        { label: 'Customization', value: 'Width customization available for garment industries' },
    ],
    'heattransfer': [
        { label: 'Material', value: 'PU / PET Reflective Film' },
        { label: 'Application Method', value: 'Heat Press' },
        { label: 'Features', value: 'High Reflectivity, Wash Resistant, Flexible' },
        { label: 'Applications', value: 'T-Shirts, Sportswear, Safety Apparel' },
        { label: 'Finish', value: 'Matte / Glossy' },
        { label: 'Customization', value: 'Custom colors and sizes available' },
    ],
    'heat-transfer-reflective-vinyl-film-tape-heat-transfer-segmented-reflective-tape': [
        { label: 'Material', value: 'Reflective Vinyl Film' },
        { label: 'Application', value: 'Heat Transfer' },
        { label: 'Features', value: 'Easy Cutting, Flexible, High Visibility' },
        { label: 'Applications', value: 'Garments, Sportswear, Branding' },
        { label: 'Compatible Machines', value: 'Plotter & Heat Press' },
        { label: 'Customization', value: 'Custom roll widths available' },
    ],
    'pvc-reflective-tape': [
        { label: 'Material', value: 'PVC Reflective Film' },
        { label: 'Adhesive Type', value: 'Pressure Sensitive Adhesive' },
        { label: 'Features', value: 'Weather Resistant, Flexible, High Reflectivity' },
        { label: 'Applications', value: 'Traffic Safety, Vehicles, Industrial Safety' },
        { label: 'Colors', value: 'Silver, Red, Yellow, White' },
        { label: 'Customization', value: 'Custom colors and widths available' },
    ],
    'grey-reflective-yarn-2-0-mm-double-side-500x500-1': [
        { label: 'Material', value: 'Polyester / Cotton Blend with Reflective Coating' },
        { label: 'Features', value: 'High Visibility, Flexible, Durable' },
        { label: 'Applications', value: 'Safety Garments, Bags, Shoes, Decorative Stitching' },
        { label: 'Compatibility', value: 'Industrial Sewing Machines' },
        { label: 'Colors', value: 'Silver Reflective Finish' },
        { label: 'Customization', value: 'Denier and spool customization available for bulk orders' },
    ],
    'material-fr-reflective-tape-all-1': [
        { label: 'Material', value: 'Flame Resistant Reflective Fabric' },
        { label: 'Attachment Type', value: 'Sew-On / Heat Transfer' },
        { label: 'Features', value: 'Fire Retardant, High Visibility, Wash Resistant' },
        { label: 'Applications', value: 'Firefighter Suits, PPE Garments, Industrial Uniforms' },
        { label: 'Color', value: 'Silver Reflective' },
        { label: 'Customization', value: 'Width and reflective grade customization available' }
    ],
    'high-reflective-polyester': [
        { label: 'Material', value: 'Polyester Reflective Fabric' },
        { label: 'Features', value: 'High Reflectivity, Flexible, Durable' },
        { label: 'Applications', value: 'Safety Jackets, Bags, Uniforms, PPE Products' },
        { label: 'Finish', value: 'Reflective Silver Finish' },
        { label: 'Compatibility', value: 'Stitching & Lamination Applications' },
        { label: 'Customization', value: 'Custom widths and reflective grades available' }
    ],
    'hipoloyster': [
        { label: 'Material', value: 'Polyester-Cotton Blend Reflective Fabric' },
        { label: 'Features', value: 'Breathable, Wash Resistant, High Visibility' },
        { label: 'Applications', value: 'Industrial Workwear, Safety Apparel, Uniforms' },
        { label: 'Color', value: 'Silver Reflective' },
        { label: 'Compatibility', value: 'Garment Manufacturing Applications' },
        { label: 'Customization', value: 'Fabric specifications customizable for bulk orders' }
    ],
    'oxfordrefle': [
        { label: 'Material', value: 'Oxford Fabric with Reflective Coating' },
        { label: 'Features', value: 'Abrasion Resistant, Flexible, High Visibility' },
        { label: 'Applications', value: 'Bags, Jackets, Rainwear, PPE Garments' },
        { label: 'Finish', value: 'Reflective Surface' },
        { label: 'Stitching Compatibility', value: 'Industrial Sewing Applications' },
        { label: 'Customization', value: 'Width and color customization available' }
    ],
    'grey-reflective-piping': [
        { label: 'Material', value: 'Reflective Fabric with Piping Core' },
        { label: 'Features', value: 'Flexible, Durable, High Visibility' },
        { label: 'Applications', value: 'Garments, Bags, Footwear, Sportswear' },
        { label: 'Color', value: 'Silver Reflective' },
        { label: 'Compatibility', value: 'Stitching & Textile Applications' },
        { label: 'Customization', value: 'Diameter and color customization available' }
    ],
    'ordinary-polyster-fabric': [
        { label: 'Material', value: 'Polyester Reflective Fabric' },
        { label: 'Features', value: 'Economical, Lightweight, Reflective Surface' },
        { label: 'Applications', value: 'Safety Vests, Bags, Promotional Garments' },
        { label: 'Finish', value: 'Reflective Silver Finish' },
        { label: 'Compatibility', value: 'Sewing & Textile Applications' },
        { label: 'Customization', value: 'Roll size customization available' }
    ],
    'woven': [
        { label: 'Material', value: 'Woven Reflective Fabric' },
        { label: 'Features', value: 'Strong Weave, High Durability, Flexible' },
        { label: 'Applications', value: 'Safety Clothing, Bags, Accessories' },
        { label: 'Finish', value: 'Reflective Woven Surface' },
        { label: 'Compatibility', value: 'Industrial Stitching Applications' },
        { label: 'Customization', value: 'Width and weave customization available' }
    ],
    'ordinary-reflective-tc-fabric': [
        { label: 'Material', value: 'TC Reflective Fabric' },
        { label: 'Features', value: 'Lightweight, Flexible, Wash Resistant' },
        { label: 'Applications', value: 'Workwear, Safety Uniforms, Textile Products' },
        { label: 'Finish', value: 'Reflective Coating' },
        { label: 'Color', value: 'Silver Grey' },
        { label: 'Customization', value: 'Fabric and width customization available' }
    ],
    '3m-foam-foam-tape': [
        { label: 'Material', value: 'PE / Acrylic Foam' },
        { label: 'Adhesive Type', value: 'High Bond Acrylic Adhesive' },
        { label: 'Features', value: 'Strong Bonding, Shock Absorption, Weather Resistant' },
        { label: 'Applications', value: 'Automotive, Signage, Mounting Applications' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, Plastic, ACP' },
        { label: 'Customization', value: 'Width and adhesive options available' }
    ],
    'tissue-tape': [
        { label: 'Material', value: 'Tissue Paper Carrier' },
        { label: 'Adhesive Type', value: 'Hot Melt / Acrylic Adhesive' },
        { label: 'Features', value: 'Strong Adhesion, Easy Die Cutting, Flexible' },
        { label: 'Applications', value: 'Paper Bonding, Foam Lamination, Printing Industry' },
        { label: 'Surface Compatibility', value: 'Plastic, Paper, Foam, Fabric' },
        { label: 'Customization', value: 'Custom widths and adhesive grades available' }
    ],
    'polyester-double-side': [
        { label: 'Material', value: 'Polyester Film Carrier' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Strong Bonding, Durable' },
        { label: 'Applications', value: 'Electronics, Membrane Switches, Industrial Bonding' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Foam, Glass' },
        { label: 'Customization', value: 'Width and adhesive customization available' }
    ],
    'vhb-tape': [
        { label: 'Material', value: 'Acrylic Foam' },
        { label: 'Adhesive Type', value: 'High Performance Acrylic Adhesive' },
        { label: 'Features', value: 'Extremely Strong Bond, Weather Resistant, Shock Absorption' },
        { label: 'Applications', value: 'ACP Fixing, Automotive, Glass Bonding, Signage' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, Plastic, Powder Coated Surfaces' },
        { label: 'Customization', value: 'Thickness and width customization available' }
    ],
    'lohmann': [
        { label: 'Material', value: 'PE Foam Carrier' },
        { label: 'Adhesive Type', value: 'High Performance Acrylic Adhesive' },
        { label: 'Features', value: 'Excellent Plate Mounting, Cushioning, Strong Adhesion' },
        { label: 'Applications', value: 'Flexographic Printing Industry' },
        { label: 'Surface Compatibility', value: 'Printing Plates & Cylinders' },
        { label: 'Customization', value: 'Width and density customization available' }
    ],
    'pe-foam-tape': [
        { label: 'Material', value: 'Polyethylene Foam' },
        { label: 'Adhesive Type', value: 'Rubber / Acrylic Adhesive' },
        { label: 'Features', value: 'Cushioning, Vibration Resistance, Waterproof' },
        { label: 'Applications', value: 'Mounting, Automotive, Glass Fixing, Signage' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Glass' },
        { label: 'Customization', value: 'Foam density and width customization available' }
    ],
    'pet-double-sided-tape': [
        { label: 'Material', value: 'PET Film Carrier' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'High Strength, Temperature Resistant, Dimensional Stability' },
        { label: 'Applications', value: 'Electronics, Industrial Assembly, Bonding' },
        { label: 'Surface Compatibility', value: 'Plastic, Metal, Foam, Glass' },
        { label: 'Customization', value: 'Adhesive strength and width customization available' }
    ],
    'transfer-tape': [
        { label: 'Material', value: 'Adhesive Transfer Film' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'High Bonding Strength, Thin Profile, Easy Lamination' },
        { label: 'Applications', value: 'Foam Bonding, Graphic Mounting, Nameplates' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Paper, Foam' },
        { label: 'Customization', value: 'Adhesive grades customizable for applications' }
    ],
    'acrylic-double-sided-tape-1': [
        { label: 'Material', value: 'Acrylic Foam / Film' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Strong Bonding, UV Resistant, Long Durability' },
        { label: 'Applications', value: 'Automotive, Construction, Industrial Mounting' },
        { label: 'Surface Compatibility', value: 'Glass, ACP, Plastic, Metal' },
        { label: 'Customization', value: 'Width and bonding strength customization available' }
    ],
    'double-sided-thermal-tape': [
        { label: 'Material', value: 'Thermal Conductive Carrier' },
        { label: 'Adhesive Type', value: 'Thermal Acrylic Adhesive' },
        { label: 'Features', value: 'Heat Dissipation, Electrical Insulation, Strong Bonding' },
        { label: 'Applications', value: 'LED Mounting, Electronics, Heat Sink Bonding' },
        { label: 'Surface Compatibility', value: 'Aluminium, PCB, Electronic Components' },
        { label: 'Customization', value: 'Thermal conductivity options available' }
    ],
    'double-sided-scrim-tape': [
        { label: 'Material', value: 'Scrim Reinforced Tissue' },
        { label: 'Adhesive Type', value: 'Hot Melt / Acrylic Adhesive' },
        { label: 'Features', value: 'Reinforced Strength, Flexible, High Adhesion' },
        { label: 'Applications', value: 'Carpet Fixing, Lamination, Foam Bonding' },
        { label: 'Surface Compatibility', value: 'Fabric, Foam, Plastic, Paper' },
        { label: 'Customization', value: 'Width and adhesive options available' }
    ],
    'eva-foam-tape': [
        { label: 'Material', value: 'EVA Foam' },
        { label: 'Adhesive Type', value: 'Pressure Sensitive Adhesive' },
        { label: 'Features', value: 'Shock Absorption, Cushioning, Waterproof' },
        { label: 'Applications', value: 'Glazing, Sealing, Automotive, Industrial Mounting' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Glass, Wood' },
        { label: 'Customization', value: 'Foam density and size customization available' }
    ],
    'spacer-tape': [
        { label: 'Material', value: 'Foam / PVC Spacer Material' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Gap Filling, Cushioning, Uniform Spacing' },
        { label: 'Applications', value: 'Glass Glazing, Structural Applications, Assembly' },
        { label: 'Surface Compatibility', value: 'Glass, Metal, Plastic' },
        { label: 'Customization', value: 'Thickness and width customization available' }
    ],
    'silicone-tape': [
        { label: 'Material', value: 'Silicone Gel' },
        { label: 'Adhesive Type', value: 'Washable Nano Adhesive' },
        { label: 'Features', value: 'Reusable, Residue Free, Transparent' },
        { label: 'Applications', value: 'Home, Automotive, Mounting Applications' },
        { label: 'Surface Compatibility', value: 'Glass, Plastic, Metal, Tiles' },
        { label: 'Customization', value: 'Roll size customization available' }
    ],
    'hot-melt-tissue-tape': [
        { label: 'Material', value: 'Tissue Carrier' },
        { label: 'Adhesive Type', value: 'Hot Melt Adhesive' },
        { label: 'Features', value: 'High Initial Tack, Flexible, Economical' },
        { label: 'Applications', value: 'Foam Bonding, Printing, Packaging' },
        { label: 'Surface Compatibility', value: 'Paper, Plastic, Foam, Fabric' },
        { label: 'Customization', value: 'Adhesive grades customizable' }
    ],
    'double-coated-cloth-tape-581': [
        { label: 'Material', value: 'Cloth Carrier' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Strong Adhesion, Flexible, Hand Tearable' },
        { label: 'Applications', value: 'Carpet Fixing, Exhibition Flooring, Industrial Use' },
        { label: 'Surface Compatibility', value: 'Fabric, Concrete, Tiles' },
        { label: 'Customization', value: 'Width customization available' }
    ],
    'aacrylic-gel-tape-1': [
        { label: 'Material', value: 'Acrylic Gel' },
        { label: 'Adhesive Type', value: 'Gel Adhesive' },
        { label: 'Features', value: 'Crystal Clear, Reusable, Strong Bonding' },
        { label: 'Applications', value: 'Decorative Mounting, Glass Fixing, Home Applications' },
        { label: 'Surface Compatibility', value: 'Glass, Metal, Plastic' },
        { label: 'Customization', value: 'Width and roll customization available' }
    ],
    'xlpe-foam-tapes': [
        { label: 'Material', value: 'Cross Linked Polyethylene Foam' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'High Density, Thermal Insulation, Shock Absorption' },
        { label: 'Applications', value: 'HVAC, Automotive, Industrial Sealing' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, ACP Panels' },
        { label: 'Customization', value: 'Foam density customization available' }
    ],
    'masking-tape': [
        { label: 'Material', value: 'Crepe Paper / Fine Line Film' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Clean Removal, Paint Resistant, Flexible' },
        { label: 'Applications', value: 'Painting, Automotive Masking, Industrial Use' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, Plastic' },
        { label: 'Customization', value: 'Width and adhesive customization available' }
    ],
    'fine-line-masking-tape': [
        { label: 'Material', value: 'Crepe Paper / Fine Line Film' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Clean Removal, Paint Resistant, Flexible' },
        { label: 'Applications', value: 'Painting, Automotive Masking, Industrial Use' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, Plastic' },
        { label: 'Customization', value: 'Width and adhesive customization available' }
    ],
    'bopp-tape': [
        { label: 'Material', value: 'BOPP Film' },
        { label: 'Adhesive Type', value: 'Water Based Acrylic Adhesive' },
        { label: 'Features', value: 'Strong Sealing, High Tensile Strength, Smooth Unwinding' },
        { label: 'Applications', value: 'Carton Sealing, Packaging, Logistics' },
        { label: 'Printing', value: 'Custom Logo Printing Available' },
        { label: 'Customization', value: 'Width and branding customization available' }
    ],
    'aluminum-foil-2-tape': [
        { label: 'Material', value: 'Aluminium Foil' },
        { label: 'Adhesive Type', value: 'Solvent Acrylic Adhesive' },
        { label: 'Features', value: 'Heat Resistant, Moisture Resistant, Strong Adhesion' },
        { label: 'Applications', value: 'HVAC, Insulation, Duct Sealing' },
        { label: 'Surface Compatibility', value: 'Metal, Insulation Panels' },
        { label: 'Customization', value: 'Width and adhesive grades available' }
    ],
    'duct-tape': [
        { label: 'Material', value: 'PE Laminated Cloth' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Waterproof, Strong Adhesion, Hand Tearable' },
        { label: 'Applications', value: 'Duct Sealing, Repairs, Industrial Maintenance' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Fabric, Concrete' },
        { label: 'Customization', value: 'Color and width customization available' }
    ],
    'high-sealing-tape': [
        { label: 'Material', value: 'Polyester / Polyimide / PTFE' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'Heat Resistant, Chemical Resistant, Clean Removal' },
        { label: 'Applications', value: 'Powder Coating, Electronics, Industrial Masking' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, PCB Surfaces' },
        { label: 'Customization', value: 'Temperature grades and widths available' }
    ],
    'paper-tape': [
        { label: 'Material', value: 'Kraft Paper / Crepe Paper' },
        { label: 'Adhesive Type', value: 'Rubber / Acrylic Adhesive' },
        { label: 'Features', value: 'Eco-Friendly, Writable Surface, Easy Tear' },
        { label: 'Applications', value: 'Packaging, Masking, Carton Sealing' },
        { label: 'Surface Compatibility', value: 'Paper, Cardboard, Plastic' },
        { label: 'Customization', value: 'Printing and size customization available' }
    ],
    'silicone-tape-2': [
        { label: 'Material', value: 'Silicone Rubber' },
        { label: 'Adhesive Type', value: 'Self-Fusing Silicone' },
        { label: 'Features', value: 'Waterproof, Heat Resistant, Electrical Insulation' },
        { label: 'Applications', value: 'Cable Repair, Pipe Wrapping, Electrical Maintenance' },
        { label: 'Surface Compatibility', value: 'Rubber, Metal, Plastic' },
        { label: 'Customization', value: 'Color and width customization available' }
    ],
    'polyester-tape': [
        { label: 'Material', value: 'Polyester Film' },
        { label: 'Adhesive Type', value: 'Silicone / Acrylic Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Strong Adhesion, Durable' },
        { label: 'Applications', value: 'Electrical Insulation, Masking, Electronics' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, PCB Surfaces' },
        { label: 'Customization', value: 'Color and adhesive options available' }
    ],
    'pvc-pipe-tape-1': [
        { label: 'Material', value: 'PVC Film' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive / Non-Adhesive' },
        { label: 'Features', value: 'Corrosion Protection, Waterproof, Flexible' },
        { label: 'Applications', value: 'Pipeline Wrapping, Underground Pipe Protection' },
        { label: 'Surface Compatibility', value: 'Metal Pipes, Industrial Pipelines' },
        { label: 'Customization', value: 'Color and width customization available' }
    ],
    'red-pvc-non-adhesive-tape': [
        { label: 'Material', value: 'PVC Film' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive / Non-Adhesive' },
        { label: 'Features', value: 'Corrosion Protection, Waterproof, Flexible' },
        { label: 'Applications', value: 'Pipeline Wrapping, Underground Pipe Protection' },
        { label: 'Surface Compatibility', value: 'Metal Pipes, Industrial Pipelines' },
        { label: 'Customization', value: 'Color and width customization available' }
    ],
    'bag-sealing-tape': [
        { label: 'Material', value: 'PET / PVC Film' },
        { label: 'Adhesive Type', value: 'Pressure Sensitive Adhesive' },
        { label: 'Features', value: 'Strong Sealing, Easy Application, Durable' },
        { label: 'Applications', value: 'Food Packaging, Plastic Bag Sealing, Retail Packaging' },
        { label: 'Color Options', value: 'Multi-Color Variants Available' },
        { label: 'Customization', value: 'Printing and roll customization available' }
    ],
    'acetate-cloth-tape-white-19mm-x-66m-crop': [
        { label: 'Material', value: 'Acetate Fabric' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Flexible, Electrical Insulation, Hand Tearable' },
        { label: 'Applications', value: 'Coil Wrapping, Electrical Insulation, Cable Harnessing' },
        { label: 'Surface Compatibility', value: 'Copper, Wires, Electrical Components' },
        { label: 'Customization', value: 'Width and color customization available' }
    ],
    'stickymat': [
        { label: 'Material', value: 'PE Film Layers' },
        { label: 'Adhesive Type', value: 'Water Based Adhesive' },
        { label: 'Features', value: 'Dust Collection, Anti-Contamination, Easy Peel Layers' },
        { label: 'Applications', value: 'Cleanrooms, Hospitals, Laboratories, Electronics Industry' },
        { label: 'Color Options', value: 'Blue, White, Grey' },
        { label: 'Customization', value: 'Sheet count and sizes customizable' }
    ],
    'mica-tape': [
        { label: 'Material', value: 'Mica Paper with Glass Cloth / Film Backing' },
        { label: 'Adhesive Type', value: 'High Temperature Resin System' },
        { label: 'Features', value: 'Fire Resistant, Electrical Insulation, Heat Resistant' },
        { label: 'Applications', value: 'Cable Insulation, Motors, Transformers' },
        { label: 'Surface Compatibility', value: 'Electrical Components' },
        { label: 'Customization', value: 'Industrial grades available on request' }
    ],
    'green-polyster': [
        { label: 'Material', value: 'Polyester Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Clean Removal, Solvent Resistant' },
        { label: 'Applications', value: 'Powder Coating, PCB Masking, Electrical Insulation' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, PCB Surfaces' },
        { label: 'Color', value: 'Green' },
        { label: 'Customization', value: 'Width and temperature grades available' }
    ],
    'green-polyster-with-liner': [
        { label: 'Material', value: 'Polyester Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Clean Removal, Solvent Resistant' },
        { label: 'Applications', value: 'Powder Coating, PCB Masking, Electrical Insulation' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, PCB Surfaces' },
        { label: 'Color', value: 'Green' },
        { label: 'Customization', value: 'Width and temperature grades available' }
    ],
    'thermal-condu-pads': [
        { label: 'Material', value: 'Silicone Thermal Compound Material' },
        { label: 'Features', value: 'Heat Dissipation, Soft Compression, Electrical Insulation' },
        { label: 'Applications', value: 'LED Lighting, Electronics, Heat Sink Applications' },
        { label: 'Surface Compatibility', value: 'PCB, Aluminium Heat Sinks' },
        { label: 'Thermal Grades', value: 'Multiple Conductivity Options Available' },
        { label: 'Customization', value: 'Die-cut and sheet customization available' }
    ],
    'surface-protection-tape': [
        { label: 'Material', value: 'Polyethylene Film' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Scratch Protection, Residue Free Removal, Flexible' },
        { label: 'Applications', value: 'ACP Sheets, Glass, Stainless Steel, Plastic Sheets' },
        { label: 'Surface Compatibility', value: 'Metal, Glass, Plastic' },
        { label: 'Customization', value: 'Printing and adhesive strength customization available' }
    ],
    'green-powder-coating-tape-500x500-1': [
        { label: 'Material', value: 'Polyester Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Clean Removal, Chemical Resistant' },
        { label: 'Applications', value: 'Powder Coating Masking, Industrial Painting' },
        { label: 'Surface Compatibility', value: 'Metal Components' },
        { label: 'Color Options', value: 'Green, Blue, Transparent' },
        { label: 'Customization', value: 'Width customization available' }
    ],
    'lamination-tape': [
        { label: 'Material', value: 'PET / BOPP Film' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Smooth Finish, Strong Bonding, Transparent' },
        { label: 'Applications', value: 'Printing, Packaging, Graphic Lamination' },
        { label: 'Surface Compatibility', value: 'Paper, Plastic, Printed Materials' },
        { label: 'Customization', value: 'Gloss and matte finish options available' }
    ],
    'foil-scrim-kraft-tape': [
        { label: 'Material', value: 'Aluminium Foil with Scrim & Kraft' },
        { label: 'Adhesive Type', value: 'Solvent Acrylic Adhesive' },
        { label: 'Features', value: 'Vapor Barrier, Heat Resistance, High Strength' },
        { label: 'Applications', value: 'HVAC Insulation, Duct Sealing, Insulation Joints' },
        { label: 'Surface Compatibility', value: 'Insulation Panels, Metal Surfaces' },
        { label: 'Customization', value: 'Width and reinforcement customization available' }
    ],
    'aluminium-pet': [
        { label: 'Material', value: 'Aluminium PET Laminate' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Reflective Surface, Heat Resistance, Moisture Barrier' },
        { label: 'Applications', value: 'Insulation, Cable Wrapping, HVAC Applications' },
        { label: 'Surface Compatibility', value: 'Metal, Insulation Materials' },
        { label: 'Customization', value: 'Width and adhesive grades available' }
    ],
    'butyl': [
        { label: 'Material', value: 'Aluminium Foil with Butyl Rubber' },
        { label: 'Adhesive Type', value: 'Butyl Adhesive' },
        { label: 'Features', value: 'Waterproof, Weatherproof, Flexible Sealing' },
        { label: 'Applications', value: 'Roofing, Waterproofing, Pipe Sealing' },
        { label: 'Surface Compatibility', value: 'Metal, Concrete, Roofing Sheets' },
        { label: 'Customization', value: 'Width and foil thickness options available' }
    ],
    'fiberglass-tape': [
        { label: 'Material', value: 'Fiberglass Cloth' },
        { label: 'Adhesive Type', value: 'Silicone / Acrylic Adhesive' },
        { label: 'Features', value: 'Heat Resistant, Flame Resistant, High Strength' },
        { label: 'Applications', value: 'Insulation, Cable Wrapping, High Temperature Protection' },
        { label: 'Surface Compatibility', value: 'Electrical & Industrial Surfaces' },
        { label: 'Customization', value: 'Adhesive and weave customization available' }
    ],
    'nrm-foam-tape': [
        { label: 'Material', value: 'Nitrile Rubber Foam' },
        { label: 'Adhesive Type', value: 'Pressure Sensitive Adhesive' },
        { label: 'Features', value: 'Thermal Insulation, Waterproof, Vibration Resistance' },
        { label: 'Applications', value: 'HVAC, Automotive, Industrial Sealing' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Glass' },
        { label: 'Customization', value: 'Density and width customization available' }
    ],
    'air-vent-tape': [
        { label: 'Material', value: 'Non-Woven / PE Film' },
        { label: 'Adhesive Type', value: 'Acrylic Adhesive' },
        { label: 'Features', value: 'Breathable Design, Moisture Control, Durable' },
        { label: 'Applications', value: 'Packaging Ventilation, Industrial Sealing' },
        { label: 'Surface Compatibility', value: 'Plastic, Paper, Packaging Materials' },
        { label: 'Customization', value: 'Vent hole patterns customizable based on application' }
    ],
    'pink-rayon': [
        { label: 'Material', value: 'Rayon Fabric' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Flexible, Heat Resistant, Strong Adhesion' },
        { label: 'Applications', value: 'Coil Insulation, Electrical Wrapping, Wire Harnessing' },
        { label: 'Surface Compatibility', value: 'Electrical Components, Wires' },
        { label: 'Customization', value: 'Width and color customization available' }
    ],
    'yellow-polyester': [
        { label: 'Material', value: 'Polyester Film' },
        { label: 'Adhesive Type', value: 'Acrylic / Silicone Adhesive' },
        { label: 'Features', value: 'Heat Resistant, Chemical Resistant, Durable' },
        { label: 'Applications', value: 'Electrical Insulation, Masking, Industrial Applications' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, PCB Surfaces' },
        { label: 'Customization', value: 'Width and adhesive customization available' }
    ],
    'aluminium-fr-grade': [
        { label: 'Material', value: 'Aluminium Foil with Glass Cloth' },
        { label: 'Adhesive Type', value: 'Flame Retardant Adhesive' },
        { label: 'Features', value: 'Fire Resistant, Heat Resistant, High Strength' },
        { label: 'Applications', value: 'HVAC, Insulation, Fire Protection Systems' },
        { label: 'Surface Compatibility', value: 'Metal, Insulation Panels' },
        { label: 'Customization', value: 'Width and FR grade customization available' }
    ],
    'glass-cloth-tape': [
        { label: 'Material', value: 'Fiberglass Cloth' },
        { label: 'Adhesive Type', value: 'Silicone / Acrylic Adhesive' },
        { label: 'Features', value: 'Flame Resistant, Heat Resistant, High Tensile Strength' },
        { label: 'Applications', value: 'Coil Wrapping, Insulation, Industrial Protection' },
        { label: 'Surface Compatibility', value: 'Electrical and Industrial Surfaces' },
        { label: 'Customization', value: 'FR grade and width customization available' }
    ],
    'fr-grade-glass-cloth-tape': [
        { label: 'Material', value: 'Fiberglass Cloth' },
        { label: 'Adhesive Type', value: 'Silicone / Acrylic Adhesive' },
        { label: 'Features', value: 'Flame Resistant, Heat Resistant, High Tensile Strength' },
        { label: 'Applications', value: 'Coil Wrapping, Insulation, Industrial Protection' },
        { label: 'Surface Compatibility', value: 'Electrical and Industrial Surfaces' },
        { label: 'Customization', value: 'FR grade and width customization available' }
    ],
    'filament-tape': [
        { label: 'Material', value: 'Fiberglass Reinforced Film' },
        { label: 'Adhesive Type', value: 'Synthetic Rubber Adhesive' },
        { label: 'Features', value: 'High Tensile Strength, Tear Resistant, Heavy Duty Bonding' },
        { label: 'Applications', value: 'Carton Reinforcement, Bundling, Palletizing' },
        { label: 'Surface Compatibility', value: 'Corrugated Boxes, Plastic, Metal' },
        { label: 'Customization', value: 'Reinforcement patterns customizable' }
    ],
    'ez-application-tape': [
        { label: 'Material', value: 'PVC / Transfer Film' },
        { label: 'Adhesive Type', value: 'Medium Tack Adhesive' },
        { label: 'Features', value: 'Bubble Free Application, Easy Transfer, Clean Removal' },
        { label: 'Applications', value: 'Vinyl Graphics, Signage, Decals' },
        { label: 'Surface Compatibility', value: 'Glass, ACP, Acrylic, Metal' },
        { label: 'Customization', value: 'Tack level and width customization available' }
    ],
    'kraft-paper-tape': [
        { label: 'Material', value: 'Kraft Paper with Reinforced Fibers' },
        { label: 'Adhesive Type', value: 'Water Activated Adhesive' },
        { label: 'Features', value: 'Eco-Friendly, Heavy Duty Sealing, Tamper Evident' },
        { label: 'Applications', value: 'Export Packaging, Carton Sealing, Industrial Packaging' },
        { label: 'Surface Compatibility', value: 'Corrugated Boxes, Paper Surfaces' },
        { label: 'Customization', value: 'Printing and reinforcement customization available' }
    ],
    'reinforced-paper-tapes1': [
        { label: 'Material', value: 'Kraft Paper with Reinforced Fibers' },
        { label: 'Adhesive Type', value: 'Water Activated Adhesive' },
        { label: 'Features', value: 'Eco-Friendly, Heavy Duty Sealing, Tamper Evident' },
        { label: 'Applications', value: 'Export Packaging, Carton Sealing, Industrial Packaging' },
        { label: 'Surface Compatibility', value: 'Corrugated Boxes, Paper Surfaces' },
        { label: 'Customization', value: 'Printing and reinforcement customization available' }
    ],
    'water-activated-kraft-tape': [
        { label: 'Material', value: 'Kraft Paper with Reinforced Fibers' },
        { label: 'Adhesive Type', value: 'Water Activated Adhesive' },
        { label: 'Features', value: 'Eco-Friendly, Heavy Duty Sealing, Tamper Evident' },
        { label: 'Applications', value: 'Export Packaging, Carton Sealing, Industrial Packaging' },
        { label: 'Surface Compatibility', value: 'Corrugated Boxes, Paper Surfaces' },
        { label: 'Customization', value: 'Printing and reinforcement customization available' }
    ],
    'cloth-adhesive-tape-500x500-1': [
        { label: 'Material', value: 'Cloth Fabric with PE Coating' },
        { label: 'Adhesive Type', value: 'Rubber Adhesive' },
        { label: 'Features', value: 'Waterproof, Flexible, Hand Tearable' },
        { label: 'Applications', value: 'Packaging, Repairs, Industrial Maintenance' },
        { label: 'Surface Compatibility', value: 'Fabric, Plastic, Metal, Concrete' },
        { label: 'Customization', value: 'Color and width customization available' }
    ],
    'nitto-903-ul-tapes': [
        { label: 'Material', value: 'PTFE Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'Non-Stick Surface, Heat Resistant, Chemical Resistant' },
        { label: 'Applications', value: 'Heat Sealing, Packaging Machines, Industrial Processing' },
        { label: 'Surface Compatibility', value: 'Metal Rollers, Heat Sealing Equipment' },
        { label: 'Customization', value: 'Width and adhesive options available' }
    ],
    'ptfe-coated-fabric-non-adhesive-1': [
        { label: 'Material', value: 'Fiberglass Fabric with PTFE Coating' },
        { label: 'Features', value: 'Non-Stick Surface, Heat Resistant, Chemical Resistant' },
        { label: 'Applications', value: 'Conveyor Belts, Heat Sealing, Industrial Processing' },
        { label: 'Surface Compatibility', value: 'High Temperature Equipment' },
        { label: 'Finish', value: 'Smooth PTFE Surface' },
        { label: 'Customization', value: 'Roll width and coating customization available' }
    ],
    'ptfe-silicone-adhesive': [
        { label: 'Material', value: 'PTFE Coated Fiberglass' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'Non-Stick, High Temperature Resistant, Easy Release' },
        { label: 'Applications', value: 'Heat Sealing, Packaging, Lamination Machines' },
        { label: 'Surface Compatibility', value: 'Metal, Industrial Rollers' },
        { label: 'Customization', value: 'Adhesive grades and widths available' }
    ],
    'ptfe-fiberglass-with-silicone-adhesive': [
        { label: 'Material', value: 'PTFE Fiberglass Fabric' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'Excellent Release Surface, Heat Resistance, Chemical Resistance' },
        { label: 'Applications', value: 'Insulation, Heat Sealing, Industrial Wrapping' },
        { label: 'Surface Compatibility', value: 'High Temperature Machinery' },
        { label: 'Customization', value: 'Fabric thickness and width customization available' }
    ],
    'ptfe-coated-fiberglass-fabric-with-silicone-adhesive-liner': [
        { label: 'Material', value: 'PTFE Coated Fiberglass with Release Liner' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'Easy Application, Non-Stick Surface, Heat Resistant' },
        { label: 'Applications', value: 'Packaging Machines, Lamination, Industrial Processing' },
        { label: 'Surface Compatibility', value: 'Metal & Industrial Equipment' },
        { label: 'Customization', value: 'Liner type and roll size customization available' }
    ],
    'polyimide-tape': [
        { label: 'Material', value: 'Polyimide Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Electrical Insulation, Residue Free Removal' },
        { label: 'Applications', value: 'PCB Masking, Electronics, Wave Soldering' },
        { label: 'Surface Compatibility', value: 'PCB, Metal, Electronic Components' },
        { label: 'Customization', value: 'Width and temperature grades available' }
    ],
    'kapton-tape': [
        { label: 'Material', value: 'Polyimide Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Electrical Insulation, Residue Free Removal' },
        { label: 'Applications', value: 'PCB Masking, Electronics, Wave Soldering' },
        { label: 'Surface Compatibility', value: 'PCB, Metal, Electronic Components' },
        { label: 'Customization', value: 'Width and temperature grades available' }
    ],
    'emi-sheliding-tape': [
        { label: 'Material', value: 'Conductive Metal Foil' },
        { label: 'Adhesive Type', value: 'Conductive Acrylic Adhesive' },
        { label: 'Features', value: 'EMI/RFI Shielding, Conductive Surface, Corrosion Resistant' },
        { label: 'Applications', value: 'Electronics, Shielding Cabinets, PCB Protection' },
        { label: 'Surface Compatibility', value: 'Metal, Plastic, Electronic Components' },
        { label: 'Customization', value: 'Conductivity grades and widths available' }
    ],
    'copper-tape-2': [
        { label: 'Material', value: 'Copper Foil' },
        { label: 'Adhesive Type', value: 'Conductive Adhesive' },
        { label: 'Features', value: 'Excellent Conductivity, EMI Shielding, Solder Compatible' },
        { label: 'Applications', value: 'Grounding, PCB Shielding, Electrical Repairs' },
        { label: 'Surface Compatibility', value: 'Electronic Components, Metal Surfaces' },
        { label: 'Customization', value: 'Adhesive and foil thickness customization available' }
    ],
    'conductive-grind-tape': [
        { label: 'Material', value: 'Conductive PET Film' },
        { label: 'Adhesive Type', value: 'Conductive Acrylic Adhesive' },
        { label: 'Features', value: 'Static Dissipative, Transparent Grid Pattern, Residue Free Removal' },
        { label: 'Applications', value: 'ESD Packaging, Electronic Assembly Areas, Cleanrooms' },
        { label: 'Surface Compatibility', value: 'Plastic, Metal, Electronic Surfaces' },
        { label: 'Customization', value: 'Grid patterns customizable on request' }
    ],
    'esd-kapton': [
        { label: 'Material', value: 'Anti-Static Polyimide Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, ESD Safe, Chemical Resistant' },
        { label: 'Applications', value: 'Electronics Manufacturing, PCB Masking, Semiconductor Industry' },
        { label: 'Surface Compatibility', value: 'PCB, Metal, Electronic Components' },
        { label: 'Customization', value: 'Width and ESD grades available' }
    ],
    'anti-static-polyester-tape': [
        { label: 'Material', value: 'Polyester Film' },
        { label: 'Adhesive Type', value: 'Anti-Static Acrylic Adhesive' },
        { label: 'Features', value: 'Static Dissipative, Heat Resistant, Residue Free Removal' },
        { label: 'Applications', value: 'Electronics, Cleanrooms, Component Packaging' },
        { label: 'Surface Compatibility', value: 'PCB, Plastic, Metal' },
        { label: 'Customization', value: 'Roll sizes customizable for industrial use' }
    ],
    'double-sided-polyimide-tapes-1': [
        { label: 'Material', value: 'Polyimide Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'High Temperature Resistance, Electrical Insulation, Strong Bonding' },
        { label: 'Applications', value: 'Flexible PCB, Electronics Assembly, Insulation' },
        { label: 'Surface Compatibility', value: 'PCB, Metal, Electronic Components' },
        { label: 'Customization', value: 'Adhesive grades customizable' }
    ],
    'polyimide-film-tape': [
        { label: 'Material', value: 'Polyimide Film' },
        { label: 'Adhesive Type', value: 'Silicone Adhesive' },
        { label: 'Features', value: 'Heat Resistant, Chemical Resistant, Electrical Insulation' },
        { label: 'Applications', value: 'Electronics, Aerospace, PCB Masking' },
        { label: 'Surface Compatibility', value: 'Electronic & Industrial Surfaces' },
        { label: 'Customization', value: 'Width and color customization available' }
    ],
    'tin-copper-tape': [
        { label: 'Material', value: 'Tin Coated Copper Foil' },
        { label: 'Adhesive Type', value: 'Conductive Adhesive' },
        { label: 'Features', value: 'EMI Shielding, Corrosion Resistance, Excellent Conductivity' },
        { label: 'Applications', value: 'Grounding, Shielding, Electrical Equipment' },
        { label: 'Surface Compatibility', value: 'Metal, Electronic Components' },
        { label: 'Customization', value: 'Foil width and conductivity customization available' }
    ]
};
