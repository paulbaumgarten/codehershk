interface GradientStop {
	offset: number;
	color: string;
	opacity?: number;
}

interface BlobConfig {
	id: string;
	pathData: string;
	defaultGradient: GradientStop[];
	defaultSize?: number;
	layers?: number;
}

export const blobShapes: Record<string, BlobConfig> = {
	fluid: {
	  id: 'fluid',
	  pathData: 'M54.7,1.4C66.8,0.7,79.5,5.7,88.3,14.5c8.8,8.8,13.8,21.5,13.1,33.6c-0.7,12.1-6.7,23.4-15.9,31.2 c-9.2,7.8-21.7,12.1-33.8,11.3c-12.1-0.7-23.8-6.7-31.6-15.9C12.3,65.5,8,53,8.8,40.9c0.7-12.1,6.7-23.4,15.9-31.2 C33.9,1.9,46.4-2.4,58.5-1.6',
	  defaultGradient: [
		{ offset: 0, color: '#4A90E2', opacity: 0.7 },
		{ offset: 0.5, color: '#6B8CEF', opacity: 0.5 },
		{ offset: 1, color: '#8F7CFF', opacity: 0.3 }
	  ],
	  layers: 3,
	  defaultSize: 250
	},
	aurora: {
	  id: 'aurora',
	  pathData: 'M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z',
	  defaultGradient: [
		{ offset: 0, color: '#FF6B6B', opacity: 0.6 },
		{ offset: 0.5, color: '#FF8E53', opacity: 0.4 },
		{ offset: 1, color: '#FFA07A', opacity: 0.2 }
	  ],
	  layers: 4,
	  defaultSize: 300
	},
	nebula: {
	  id: 'nebula',
	  pathData: 'M48.7,-40.2C59.9,-26.3,63.4,-7.5,58.8,8.4C54.1,24.4,41.4,37.5,25.8,45.1C10.3,52.7,-8,54.8,-24.7,48.4C-41.3,42,-56.3,27.1,-60.1,9.1C-63.9,-8.9,-56.5,-29.9,-43,-41.8C-29.4,-53.7,-9.7,-56.4,4.9,-60.4C19.6,-64.4,37.5,-54.1,48.7,-40.2Z',
	  defaultGradient: [
		{ offset: 0, color: '#50E3C2', opacity: 0.7 },
		{ offset: 0.5, color: '#4FACFE', opacity: 0.5 },
		{ offset: 1, color: '#4A90E2', opacity: 0.3 }
	  ],
	  layers: 3,
	  defaultSize: 280
	}
};