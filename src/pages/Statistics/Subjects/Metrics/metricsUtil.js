const disciplinas = [
    {
        "label": "Laboratório de Programação 2",
        "value": "lp2",
        "role": "Obrigatórias"
    },
    {
        "label": "Programação 2",
        "value": "p2",
        "role": "Obrigatórias"
    },
    {
        "label": "Sistemas Operacionais",
        "value": "so",
        "role": "Obrigatórias"
    },
    {
        "label": "Laboratório de Programação 1",
        "value": "lp1",
        "role": "Obrigatórias"
    },
    {
        "label": "Análise e Técnica de Algoritmos",
        "value": "atal",
        "role": "Obrigatórias"
    },
    {
        "label": "Redes de Computadores",
        "value": "redes",
        "role": "Obrigatórias"
    },
    {
        "label": "Programação 1",
        "value": "p1",
        "role": "Obrigatórias"
    },
    {
        "label": "Teoria dos Grafos",
        "value": "grafos",
        "role": "Obrigatórias"
    },
    {
        "label": "Estrutura de Dados e Algoritmos",
        "value": "eda",
        "role": "Obrigatórias"
    },
    {
        "label": "Laboratório de Estrutura de Dados",
        "value": "leda",
        "role": "Obrigatórias"
    },
    {
        "label": "Organização e Arquitetura de Computadores",
        "value": "oac",
        "role": "Obrigatórias"
    },
    {
        "label": "Laboratório de Organização e Arquitetura de Computadores",
        "value": "loac",
        "role": "Obrigatórias"
    },
    {
        "label": "Paradigmas de Linguagem de Programação",
        "value": "plp",
        "role": "Obrigatórias"
    },
    {
        "label": "Teoria da Computação",
        "value": "tc",
        "role": "Obrigatórias"
    },
    {
        "label": "Lógica para Computação",
        "value": "logica",
        "role": "Obrigatórias"
    },
    {
        "label": "Fundamentos Matemáticos para Ciência da Computação 1",
        "value": "fmcc1",
        "role": "Obrigatórias"
    },
    {
        "label": "Fundamentos Matemáticos para Ciência da Computação 2",
        "value": "fmcc2",
        "role": "Obrigatórias"
    },
    {
        "label": "Programação Concorrente",
        "value": "pc",
        "role": "Obrigatórias"
    },
    {
        "label": "Arquitetura de Software",
        "value": "arqsoft",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Algoritmos Avançados",
        "value": "aa",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Programação Funcional",
        "value": "funcional",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Administração de Sistemas",
        "value": "sysadm",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Príncipios de Desenvolvimento Web",
        "value": "devweb",
        "role": "Optativas Expecíficas"
    },
    {
        "label": "Informática e Sociedade",
        "value": "infosoc",
        "role": "Optativas Gerais"
    },
    {
        "label": "Língua Portuguesa",
        "value": "portugues",
        "role": "Optativas Gerais"
    },
    {
        "label": "Cáculo Diferencial 3",
        "value": "c3",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 1",
        "value": "f1",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 2",
        "value": "f2",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 3",
        "value": "f3",
        "role": "Extracurriculares"
    },
    {
        "label": "Física Geral 4",
        "value": "f4",
        "role": "Extracurriculares"
    },
];

const metricas = [
    {
        "label": "Taxa de Sucesso",
        "value": "taxaSucesso",
        "role": "metrica"
    },
    {
        "label": "Número de Matrículas",
        "value": "nMatricula",
        "role": "metrica"
    },
    {
        "label": "Tamanho da turma",
        "value": "tamanhoTurma",
        "role": "metrica"
    }
];

const dataSucesso = {
    "professoresLp2": ["t1", "t2", "t3", "t4", "t5"],

    "lp2": [
    {
      name: '2014.1', t1: 75, t2: 60, t3: 48, total: 183
    },
    {
      name: '2014.2', t1: 70, t2: 45, t3: 62, total: 177
    },
    {
      name: '2015.1', t2: 78, t3: 82, t4: 65, total: 225
    },
    {
      name: '2015.2', t2: 88, t3: 86, t4: 80, total: 254
    },
    {
      name: '2016.1', t2: 94, t3: 90, t4: 82, total: 266
    },
    {
      name: '2016.2', t3: 90, t4: 90, t5: 86, total: 266
    },
    {
      name: '2017.1', t3: 92, t4: 90, t5: 88, total: 270
    },
    {
      name: '2017.2', t3: 94, t4: 88, t5: 93, total: 275
    },
  ]
};

const dataNumber = {
    "professoresLp2": ["t1", "t2", "t3", "t4", "t5"],

     "lp2": [
    {
      name: '2014.1', t1: 35, t2: 40, t3: 48, total: 123
    },
    {
      name: '2014.2', t1: 30, t2: 45, t3: 42, total: 117
    },
    {
      name: '2015.1', t2: 38, t3: 32, t4: 35, total: 105
    },
    {
      name: '2015.2', t2: 38, t3: 36, t4: 40, total: 114
    },
    {
      name: '2016.1', t2: 34, t3: 40, t4: 42, total: 116
    },
    {
      name: '2016.2', t3: 40, t4: 40, t5: 36, total: 116
    },
    {
      name: '2017.1', t3: 32, t4: 40, t5: 38, total: 110
    },
    {
      name: '2017.2', t3: 34, t4: 38, t5: 43, total: 115
    },
  ]
};

const dataSize = {
    "lp2": [
    {
    name: '2014.1', min: 35, medio: 40, max: 48, 
    },
    {
    name: '2014.2', min: 30, medio: 37, max: 42, 
    },
    {
    name: '2015.1', min: 33, medio: 38, max: 45, 
    },
    {
    name: '2015.2', min: 30, medio: 36, max: 40, 
    },
    {
    name: '2016.1', min: 34, medio: 40, max: 42, 
    },
    {
    name: '2016.2', min: 30, medio: 40, max: 50, 
    },
    {
    name: '2017.1', min: 32, medio: 39, max: 38, 
    },
    {
    name: '2017.2', min: 34, medio: 38, max: 43, 
    },
    ]
}

const labels = [
    '1981.1', '1981.2','1982.1', '1982.2', '1983.1', '1983.2', '1984.1', '1984.2', '1985.1', '1985.2', '1986.1', '1986.2', '1987.1', '1987.2', '1988.1', '1988.2', '1989.1', '1989.2', '1990.1', '1990.2',
    '1991.1', '1991.2','1992.1', '1992.2', '1993.1', '1993.2', '1994.1', '1994.2', '1995.1', '1995.2', '1996.1', '1996.2', '1997.1', '1997.2', '1998.1', '1998.2', '1999.1', '1999.2', '2000.1', '2000.2',
    '2001.1', '2001.2','2002.1', '2002.2', '2003.1', '2003.2', '2004.1', '2004.2', '2005.1', '2005.2', '2006.1', '2006.2', '2007.1', '2007.2', '2008.1', '2008.2', '2009.1', '2009.2', '2010.1', '2010.2',
    '2011.1', '2011.2','2012.1', '2012.2', '2013.1', '2013.2', '2014.1', '2014.2', '2015.1', '2015.2', '2016.1', '2016.2', '2017.1', '2017.2', '2018.1', '2018.2', '2019.1', '2019.2'
];


export {disciplinas, metricas, dataSucesso, dataNumber, labels, dataSize}